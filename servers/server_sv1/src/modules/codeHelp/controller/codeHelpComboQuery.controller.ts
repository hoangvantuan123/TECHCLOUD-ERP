import { Controller, Get, Query } from '@nestjs/common';
import { CodeHelpComboQueryService } from '../service/codeHelpComboQuery.service';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v1/mssql/code-help-combo-query')
export class CodeHelpComboQueryController {
    constructor(private readonly codeHelpComboQueryService: CodeHelpComboQueryService) { }
    @Get('')
    async checkItemLotExists(
        @Query('workingTag') workingTag: string,
        @Query('languageSeq') languageSeq: number,
        @Query('codeHelpSeq') codeHelpSeq: number,
        @Query('companySeq') companySeq: number,
        @Query('keyword') keyword: string,
        @Query('param1') param1: string,
        @Query('param2') param2: string,
        @Query('param3') param3: string,
        @Query('param4') param4: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.codeHelpComboQueryService._SCACodeHelpComboQuery(workingTag, languageSeq, codeHelpSeq, companySeq, keyword, param1, param2, param3, param4);
        return result;
    }
}
