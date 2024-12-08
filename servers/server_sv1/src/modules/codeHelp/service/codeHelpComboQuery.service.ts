import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class CodeHelpComboQueryService {
    constructor(private readonly databaseService: DatabaseService) { }



    async _SCACodeHelpComboQuery(
        workingTag: string,
        languageSeq: number,
        codeHelpSeq: number,
        companySeq: number,
        keyword: string,
        param1: string,
        param2: string,
        param3: string,
        param4: string,
    ): Promise<SimpleQueryResult> {
        const query = `
          EXEC dbo._SCACodeHelpComboQuery_WEB 
            @WorkingTag = '${workingTag}',
            @LanguageSeq = ${languageSeq},
            @CodeHelpSeq = ${codeHelpSeq},
            @CompanySeq = ${companySeq},
            @Keyword = '${keyword}',
            @Param1 = '${param1}',
            @Param2 = '${param2}',
            @Param3 = '${param3}',
            @Param4 = '${param4}';
        `.trim();

        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }



}
