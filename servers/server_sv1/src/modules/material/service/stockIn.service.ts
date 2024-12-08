import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';
import { GenerateXmlService } from '../generate-xml/generate-xml.service';

@Injectable()
export class StockInService {
  constructor(private readonly databaseService: DatabaseService, private readonly generateXmlService: GenerateXmlService) { }

  async ITM_SConvertDC(itemNo: string, prodDate1: string, inDate1: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC ITM_SConvertDC 
        @pItemNo = ${itemNo},
        @pProdDate = ${prodDate1},
        @pInDate = ${inDate1};
    `;

    try {
      const result = await this.databaseService.executeQuery(query);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }



  async ITM_SUGGetActiveDeliveryItem(deliverySeq: number, purchaseType: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC ITM_SUGGetActiveDeliveryItem_WEB 
        @pDeliverySeq = ${deliverySeq},
        @pPurchaseType = '${purchaseType}';
    `;
    try {
      const result = await this.databaseService.executeQuery(query);

      if (result.length !== 0) {
        return { success: true, data: result };
      } else {
        return { success: false, message: ERROR_MESSAGES.WARNING_HOLD_BARCODE };
      }
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }


  async _SMaterialQRCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SMaterialQRCheck_WEB 
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


  /* CHECK SACAN CODE POST */
  /* 4 Đầu check stockIn lẻ  */
  /* DÙNG TRONG TRƯỜNG HỢP MUỐN TÁCH RIÊNG HẾT RA */



  async _SCOMCloseCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SCOMCloseCheck_WEB 
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

  async _SCOMCloseItemCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SCOMCloseItemCheck_WEB 
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


  async _SSLImpDelvMasterCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SSLImpDelvMasterCheck_WEB 
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
  async _SSLImpDelvSheetCheck_WEB(xmlDocument: string, xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const escapedXmlDocument = xmlDocument.replace(/'/g, "''");
    const query = `
      EXEC _SSLImpDelvSheetCheck_WEB 
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


  /* ĐẦU API CHECK ALL cho _SCOMCloseCheck_WEB  && _SCOMCloseItemCheck_WEB && _SSLImpDelvMasterCheck_WEB  && _SSLImpDelvSheetCheck_WEB */
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


  /*  async checkAllProceduresStockIn(
     procedureData: { name: string; xmlDocument: string; serviceSeq: number }[],
     xmlFlags: number,
     workingTag: string,
     companySeq: number,
     languageSeq: number,
     userSeq: number,
     pgmSeq: number,
     dataSave: any[]
   ): Promise<SimpleQueryResult> {
     try {
       const errors: string[] = [];
       let masterCheckResult: any[] | null = null;
       const data: any[] = [];
       for (const { name, xmlDocument, serviceSeq } of procedureData) {
         let result: any;
         if (name === '_SSLImpDelvMasterCheck_WEB') {
           result = await this._executeProcedure(
             name,
             xmlDocument,
             xmlFlags,
             serviceSeq,
             workingTag,
             companySeq,
             languageSeq,
             userSeq,
             pgmSeq
           );
 
           const invalidStatuses = result.some((item: any) => item.Status !== 0);
           if (invalidStatuses) {
             errors.push(result.map((item: any) => `${item.Result}`).join('; '));
           }
           masterCheckResult = result;
         } else if (name === '_SSLImpDelvSheetCheck_WEB') {
           if (masterCheckResult) {
             const DelvSeqItem = masterCheckResult[0].DelvSeq;
             const updatedXmlDocument = xmlDocument
               .replace(/<DataBlock2>(.*?)<\/DataBlock2>/gs, (match: any) => {
                 return match.replace(
                   /<DelvSeq><\/DelvSeq>/,
                   `<DelvSeq>${DelvSeqItem}</DelvSeq>`
                 );
               });
 
             result = await this._executeProcedure(
               name,
               updatedXmlDocument,
               xmlFlags,
               serviceSeq,
               workingTag,
               companySeq,
               languageSeq,
               userSeq,
               pgmSeq
             );
 
             const invalidStatuses = result.some((item: any) => item.Status !== 0);
             if (invalidStatuses) {
               errors.push(result.map((item: any) => `${item.Result}`).join('; '));
             }
           } else {
             errors.push("Master check procedure didn't complete successfully.");
           }
         } else {
           result = await this._executeProcedure(
             name,
             xmlDocument,
             xmlFlags,
             serviceSeq,
             workingTag,
             companySeq,
             languageSeq,
             userSeq,
             pgmSeq
           );
 
           const invalidStatuses = result.some((item: any) => item.Status !== 0);
           if (invalidStatuses) {
             errors.push(result.map((item: any) => `${item.Result}`).join('; '));
           }
         }
 
         data.push({ name, result });
 
       }
 
       if (errors.length > 0) {
         return { success: false, message: errors.join('; '), data };
       }
 
 
       if (data && data.length > 0) {
         let saveResult: SimpleQueryResult | null = null;
 
         for (const item of data) {
 
           if (item.name === '_SSLImpDelvMasterCheck_WEB') {
             saveResult = await this._SSLImpDelvMasterSaveWEB(
               item.result,
               xmlFlags,
               4493,
               workingTag,
               companySeq,
               languageSeq,
               userSeq,
               pgmSeq,
               item.result[0]?.DelvNo
             );
           }
 
           if (item.name === '_SSLImpDelvSheetCheck_WEB') {
             saveResult = await this._SSLImpDelvSheetSaveWEB(
               dataSave,
               xmlFlags,
               4493,
               workingTag,
               companySeq,
               languageSeq,
               userSeq,
               pgmSeq,
               item.result[0]?.DelvSeq,
             );
 
 
             saveResult = await this._SCOMSourceDailySaveWEB(
               dataSave,
               xmlFlags,
               3181,
               workingTag,
               companySeq,
               languageSeq,
               userSeq,
               pgmSeq,
               item.result[0]?.DelvSeq
             );
 
 
             saveResult = await this._SLGInOutDailyBatchWEB(
               item.result,
               xmlFlags,
               2619,
               workingTag,
               companySeq,
               languageSeq,
               userSeq,
               pgmSeq,
               item.result[0]?.DelvSeq
             );
 
           }
 
           if (item.name === '_SLGLotNoMasterCheck_WEB') {
             saveResult = await this._SLGLotNoMasterSaveWEB(
               item.result,
               xmlFlags,
               4422,
               workingTag,
               companySeq,
               languageSeq,
               userSeq,
               pgmSeq,
             );
           }
           if (saveResult) {
             if (!saveResult.success) {
               console.error(`Save procedure for ${item.name} failed: ${saveResult.message}`);
             } else {
               console.log(`Save procedure for ${item.name} succeeded: `, saveResult.data);
             }
           }
         }
       }
 
       return { success: true, message: 'All procedures executed successfully.', data };
     } catch (error) {
       return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR, data: [] };
     }
   } */
  /* SAVE */

  async checkAllProceduresStockIn(
    procedureData: { name: string; xmlDocument: string; serviceSeq: number }[],
    xmlFlags: number,
    workingTag: string,
    companySeq: number,
    languageSeq: number,
    userSeq: number,
    pgmSeq: number,
    dataSave: any[]
  ): Promise<SimpleQueryResult> {
    try {
      const errors: string[] = [];
      const data: any[] = [];
      let masterCheckResult: any[] | null = null;

      const executeProcedure = async (
        name: string,
        xmlDocument: string,
        serviceSeq: number
      ) => {
        const result = await this._executeProcedure(
          name,
          xmlDocument,
          xmlFlags,
          serviceSeq,
          workingTag,
          companySeq,
          languageSeq,
          userSeq,
          pgmSeq
        );

        if (result.some((item: any) => item.Status !== 0)) {
          errors.push(result.map((item: any) => `${item.Result}`).join('; '));
        }
        return result;
      };

      for (const { name, xmlDocument, serviceSeq } of procedureData) {
        let result: any;
        if (name === '_SSLImpDelvMasterCheck_WEB') {
          result = await executeProcedure(name, xmlDocument, serviceSeq);
          masterCheckResult = result;
        } else if (name === '_SSLImpDelvSheetCheck_WEB' && masterCheckResult) {
          const delvSeq = masterCheckResult[0]?.DelvSeq;
          const updatedXmlDocument = xmlDocument.replace(
            /<DataBlock2>(.*?)<\/DataBlock2>/gs,
            (match) => match.replace(/<DelvSeq><\/DelvSeq>/, `<DelvSeq>${delvSeq}</DelvSeq>`)
          );
          result = await executeProcedure(name, updatedXmlDocument, serviceSeq);
        } else {
          result = await executeProcedure(name, xmlDocument, serviceSeq);
        }
        data.push({ name, result });
      }

      if (errors.length > 0) {
        return { success: false, message: errors.join('; '), data };
      }

      const saveProcedure = async (name: string, result: any) => {
        switch (name) {
          case '_SSLImpDelvMasterCheck_WEB':
            return this._SSLImpDelvMasterSaveWEB(
              result,
              xmlFlags,
              4493,
              workingTag,
              companySeq,
              languageSeq,
              userSeq,
              pgmSeq,
              result[0]?.DelvNo
            );
          case '_SSLImpDelvSheetCheck_WEB': {
            const delvSeq = result[0]?.DelvSeq;
            return Promise.all([
              this._SSLImpDelvSheetSaveWEB(
                dataSave,
                xmlFlags,
                4493,
                workingTag,
                companySeq,
                languageSeq,
                userSeq,
                pgmSeq,
                delvSeq
              ),
              this._SCOMSourceDailySaveWEB(
                dataSave,
                xmlFlags,
                3181,
                workingTag,
                companySeq,
                languageSeq,
                userSeq,
                pgmSeq,
                delvSeq
              ),
              this._SLGInOutDailyBatchWEB(
                result,
                xmlFlags,
                2619,
                workingTag,
                companySeq,
                languageSeq,
                userSeq,
                pgmSeq,
                delvSeq
              ),
            ]);
          }
          case '_SLGLotNoMasterCheck_WEB':
            return this._SLGLotNoMasterSaveWEB(
              result,
              xmlFlags,
              4422,
              workingTag,
              companySeq,
              languageSeq,
              userSeq,
              pgmSeq
            );
          default:
            return null;
        }
      };

      const saveResults = await Promise.all(
        data.map(async ({ name, result }) => {
          const saveResult = await saveProcedure(name, result);
          if (saveResult && !Array.isArray(saveResult) && !saveResult.success) {
            console.error(`Save procedure for ${name} failed: ${saveResult.message}`);
          }
          return saveResult;
        })
      );

      if (saveResults.some((res) => res && !Array.isArray(res) && !res.success)) {
        return { success: false, message: 'Some save procedures failed.', data };
      }
      return { success: true, message: 'All procedures executed successfully.', data };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR, data: [] };
    }
  }

  /*_SSLImpDelvMasterSave_WEB  */
  async _SSLImpDelvMasterSaveWEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, SPDelvNo: any): Promise<SimpleQueryResult> {
    const xmlDocument = await this.generateXmlService.generateXMLSSLImpDelvMasterSave(result, SPDelvNo);
    const query = `
      EXEC _SSLImpDelvMasterSave_WEB
        @xmlDocument = N'${xmlDocument}',
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
      return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
    }
  }
  /*  _SSLImpDelvSheetSave_WEB*/
  async _SSLImpDelvSheetSaveWEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, SPDelvSeq: any): Promise<SimpleQueryResult> {
    const xmlDocument = await this.generateXmlService.generateXMLSSLImpDelvSheetSave(result, SPDelvSeq);
    const query = `
      EXEC _SSLImpDelvSheetSave_WEB
        @xmlDocument = N'${xmlDocument}',
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
      return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
    }
  }
  async _SLGLotNoMasterSaveWEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number): Promise<SimpleQueryResult> {
    const xmlDocument = await this.generateXmlService.generateXMLSLGLotNoMasterSave(result);
    const query = `
      EXEC _SLGLotNoMasterSave_WEB
        @xmlDocument = N'${xmlDocument}',
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
      return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
    }
  }

  async _SCOMSourceDailySaveWEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, SPDelvSeq: any): Promise<SimpleQueryResult> {
    const xmlDocument = await this.generateXmlService.generateXMLSCOMSourceDailySave(result, SPDelvSeq);
    const query = `
      EXEC _SCOMSourceDailySave_WEB
        @xmlDocument = N'${xmlDocument}',
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
      return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
    }
  }
  async _SLGInOutDailyBatchWEB(result: any[], xmlFlags: number, serviceSeq: number, workingTag: string, companySeq: number, languageSeq: number, userSeq: number, pgmSeq: number, SPDelvSeq: any): Promise<SimpleQueryResult> {
    const xmlDocument = await this.generateXmlService.generateXMLSLGInOutDailyBatch(result, SPDelvSeq);
    const query = `
      EXEC _SLGInOutDailyBatch_WEB
        @xmlDocument = N'${xmlDocument}',
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
      return { success: false, message: error.message || ERROR_MESSAGES.DATABASE_ERROR };
    }
  }







}
