import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';
import { GenerateXmlService } from '../generate-xml/generate-xml.service';

@Injectable()
export class StockOutService {
    constructor(private readonly databaseService: DatabaseService, private readonly generateXmlService: GenerateXmlService) { }


    async _SPDMMOutReqListQuery_Web(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
        const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
        const query = `
          EXEC ITM_SPDMMOutReqListQuery_WEB  
            @xmlDocument = N'<ROOT> ${escapedXmlDocument} </ROOT>',
            @xmlFlags = ${xmlFlags},
            @ServiceSeq = ${serviceSeq},
            @WorkingTag = N'${workingTag}',
            @CompanySeq = ${companySeq},
            @LanguageSeq = ${languageSeq},
            @UserSeq = ${userSeq},
            @PgmSeq = ${pgmSeq};
        `;
        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }
    async ITM_SPDMMOutReqItemList_WEB(outReqSeq: string): Promise<SimpleQueryResult> {
        const query = `
          EXEC ITM_SPDMMOutReqItemList_WEB 
           @OutReqSeq = ${outReqSeq}
        `;
        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }

    async _SMaterialQRStockOutCheck_WEB(
        xmlDocument: string,
        xmlFlags: number,
        serviceSeq: number,
        workingTag: string,
        languageSeq: number,
        pgmSeq: number,
        decodedToken: any
    ): Promise<SimpleQueryResult> {
        const userCheck = await this.databaseService.findAuthCheckUser(
            decodedToken?.UserId,
            decodedToken?.EmpSeq,
            decodedToken?.UserSeq
        );
        if (!userCheck || userCheck.length === 0) {
            return {
                success: false,
                message: `User with UserId: ${decodedToken?.UserId}, EmpSeq: ${decodedToken?.EmpSeq}, UserSeq: ${decodedToken?.UserSeq} not found.`
            };
        }
        try {
            const escapedXmlDocument = xmlDocument.replace(/'/g, "''");

            const query = `
                EXEC _SMaterialQRStockOutCheck_WEB 
                  @xmlDocument = N'<ROOT>${escapedXmlDocument}</ROOT>',
                  @xmlFlags = ${xmlFlags},
                  @ServiceSeq = ${serviceSeq},
                  @WorkingTag = N'${workingTag}',
                  @CompanySeq = ${decodedToken.CompanySeq},
                  @LanguageSeq = ${languageSeq},
                  @UserSeq = ${decodedToken.UserSeq},
                  @PgmSeq = ${pgmSeq};
            `;
            const result = await this.databaseService.executeQuery(query);

            const invalidStatuses = result.some((item: any) => item.Status !== 0);
            if (invalidStatuses) {
                const errorMessage = result
                    .map((item: any) => `${item.Result}`)
                    .join('; ');
                return { success: false, message: errorMessage };
            }

            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }



    private async _executeProcedure(
        procedureName: string,
        xmlDocument: string,
        xmlFlags: number,
        serviceSeq: number,
        workingTag: string,
        companySeq: number,
        languageSeq: number,
        userSeq: number,
        pgmSeq: number
    ): Promise<any[]> {
        const escapedXmlDocument = xmlDocument.replace(/'/g, "''");

        const query = `
            EXEC ${procedureName} 
                @xmlDocument = N'<ROOT> ${escapedXmlDocument} </ROOT>',
                @xmlFlags = ${xmlFlags},
                @ServiceSeq = ${serviceSeq},
                @WorkingTag = N'${workingTag}',
                @CompanySeq = ${companySeq},
                @LanguageSeq = ${languageSeq},
                @UserSeq = ${userSeq},
                @PgmSeq = ${pgmSeq};
        `;
        return await this.databaseService.executeQuery(query);
    }

    async checkAllProceduresStockOutFiFo(
        procedureData: { name: string; xmlDocument: string; serviceSeq: number }[],
        xmlFlags: number,
        workingTag: string,
        languageSeq: number,
        pgmSeq: number,
        dataSave: any[],
        decodedToken: any
    ): Promise<SimpleQueryResult> {
        const userCheck = await this.databaseService.findAuthCheckUser(
            decodedToken?.UserId,
            decodedToken?.EmpSeq,
            decodedToken?.UserSeq
        );

        if (!userCheck || userCheck.length === 0) {
            return { success: false, message: `User not found.` };
        }

        const errors: string[] = [];
        const data: any[] = [];
        let masterCheckResult: any[] | null = null;

        const executeProcedure = async (
            name: string,
            xmlDocument: string,
            serviceSeq: number
        ): Promise<any> => {
            try {
                const result = await this._executeProcedure(
                    name,
                    xmlDocument,
                    xmlFlags,
                    serviceSeq,
                    workingTag,
                    decodedToken.CompanySeq,
                    languageSeq,
                    decodedToken.UserSeq,
                    pgmSeq
                );

                if (result.some((item: any) => item.Status !== 0)) {
                    errors.push(result.map((item: any) => `${item.Result}`).join('; '));
                }
                return result;
            } catch (err) {
                const errorMessage = `Error executing procedure ${name}: ${err.message}`;
                errors.push(errorMessage);
                console.error(errorMessage);
                throw err;
            }
        };

        for (const { name, xmlDocument, serviceSeq } of procedureData) {
            try {
                let result: any;

                if (name === '_SPDMMOutProcCheck_WEB') {
                    result = await executeProcedure(name, xmlDocument, serviceSeq);
                    masterCheckResult = result;
                } else if (name === '_SPDMMOutProcItemCheck_WEB' && masterCheckResult) {
                    const MatOutSeq = masterCheckResult[0]?.MatOutSeq;
                    const updatedXmlDocument = xmlDocument.replace(
                        /<DataBlock3>(.*?)<\/DataBlock3>/gs,
                        (match) => match.replace(/<MatOutSeq><\/MatOutSeq>/, `<MatOutSeq>${MatOutSeq}</MatOutSeq>`)
                    );
                    result = await executeProcedure(name, updatedXmlDocument, serviceSeq);
                } else {
                    result = await executeProcedure(name, xmlDocument, serviceSeq);
                }

                data.push({ name, result });
            } catch (err) {
                console.error(`Failed to process procedure ${name}: ${err.message}`);
            }
        }

        if (errors.length > 0) {
            return { success: false, message: errors.join('; '), data };
        }

        const saveProcedure = async (name: string, result: any): Promise<boolean> => {
            try {
                if (name === '_SPDMMOutProcCheck_WEB') {
                    await this._SPDMMOutProcSave_WEB(
                        result,
                        xmlFlags,
                        3033,
                        workingTag,
                        decodedToken.CompanySeq,
                        languageSeq,
                        decodedToken.UserSeq,
                        pgmSeq
                    );
                }
                if (name === '_SPDMMOutProcItemCheck_WEB') {
                    console.log('result', result)
                    await this._SPDMMOutProcItemSave_WEB(
                        result,
                        xmlFlags,
                        3033,
                        workingTag,
                        decodedToken.CompanySeq,
                        languageSeq,
                        decodedToken.UserSeq,
                        pgmSeq,
                        result[0].MatOutSeq
                    );
                    await this._SLGInOutDailyBatch_WEB(
                        result,
                        xmlFlags,
                        3033,
                        workingTag,
                        decodedToken.CompanySeq,
                        languageSeq,
                        decodedToken.UserSeq,
                        pgmSeq,
                        result[0].MatOutSeq,
                        dataSave[0].FactUnit,
                        result[0].MatOutNo
                    );
                    await this._SCOMSourceDailySave(
                        result,
                        xmlFlags,
                        3033,
                        workingTag,
                        decodedToken.CompanySeq,
                        languageSeq,
                        decodedToken.UserSeq,
                        pgmSeq
                    );
                }
                return true;
            } catch (err) {
                errors.push(`Error saving results for ${name}: ${err.message}`);
                return false;
            }
        };
        for (const { name, result } of data) {
            const success = await saveProcedure(name, result);
            if (!success) {
                return {
                    success: false,
                    message: 'Failed to save some procedure results.',
                    data
                };
            }
        }

        return { success: true, message: 'All procedures executed and saved successfully.', data };
    }




    /*_SPDMMOutProcSave_WEB  */
    async _SPDMMOutProcSave_WEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMLSPDMMOutProcSaveWEB(result);
        const query = `
      EXEC _SPDMMOutProcSave_WEB
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = 3033,
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {

            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }

    async _SPDMMOutProcItemSave_WEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, MatOutSeq: any): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMSPDMMOutProcItemSave(result, MatOutSeq);
        const query = `
      EXEC _SPDMMOutProcItemSave_WEB
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = 3033,
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }


    async _SLGInOutDailyBatch_WEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, MatOutSeq: any, FactUnit: any, MatOutNo: any): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMLSLGInOutDailyBatchStockoutFiFo(result, MatOutSeq, FactUnit, MatOutNo);
        const query = `
      EXEC _SLGInOutDailyBatch_WEB
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = 2619,
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            console.log('query', query)
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }
    async _SCOMSourceDailySave(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
        const xmlDocument = await this.generateXmlService.generateXMLSCOMSourceDailySaveFiFo(result);
        const query = `
      EXEC _SCOMSourceDailySave
        @xmlDocument = N'${xmlDocument}',
        @xmlFlags = ${xmlFlags},
        @ServiceSeq = 3181,
        @WorkingTag = N'${workingTag}',
        @CompanySeq = ${companySeq},
        @LanguageSeq = ${languageSeq},
        @UserSeq = ${userSeq},
        @PgmSeq = ${pgmSeq};
    `;
        try {
            console.log('query', query)
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
        }
    }


}
