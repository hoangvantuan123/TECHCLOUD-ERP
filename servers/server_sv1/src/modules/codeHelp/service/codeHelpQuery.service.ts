import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class CodeHelpQueryService {
    constructor(private readonly databaseService: DatabaseService) { }



    async _SCACodeHelpQuery(
        workingTag: string,
        languageSeq: number,
        codeHelpSeq: string,
        companySeq: number,
        keyword: string,
        param1: string,
        param2: string,
        param3: string,
        param4: string,
        conditionSeq: string,
        pageCount: number,
        pageSize: number,
        subConditionSql: string,
        accUnit: string,
        bizUnit: number,
        factUnit: number,
        deptSeq: number,
        wkDeptSeq: number,
        empSeq: number,
        userSeq: number
    ): Promise<SimpleQueryResult> {
        const query = `
            EXEC dbo._SCACodeHelpQuery_Web 
              @WorkingTag = '${workingTag}',
              @LanguageSeq = ${languageSeq},
              @CodeHelpSeq = N'${codeHelpSeq}',
              @CompanySeq = ${companySeq},
              @Keyword = N'%${keyword}%',
              @Param1 = N'${param1}',
              @Param2 = N'${param2}',
              @Param3 = N'${param3}',
              @Param4 = N'${param4}',
              @ConditionSeq = N'${conditionSeq}',
              @PageCount = N'${pageCount}',
              @PageSize = N'${pageSize}',
              @SubConditionSql = N'${subConditionSql}',
              @AccUnit = N'${accUnit}',
              @BizUnit = ${bizUnit},
              @FactUnit = ${factUnit},
              @DeptSeq = ${deptSeq},
              @WkDeptSeq = ${wkDeptSeq},
              @EmpSeq = ${empSeq},
              @UserSeq = ${userSeq};
        `.trim();

        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }



}
