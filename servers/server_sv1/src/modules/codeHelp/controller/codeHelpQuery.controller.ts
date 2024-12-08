import { Controller, Get, Query } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { CodeHelpQueryService } from '../service/codeHelpQuery.service';

@Controller('v1/mssql/code-help-query')
export class CodeHelpQueryController {
    constructor(private readonly codeHelpQueryService: CodeHelpQueryService) { }

    @Get('')
    async checkItemLotExists(
        @Query('workingTag') workingTag: string,
        @Query('languageSeq') languageSeq: number,
        @Query('codeHelpSeq') codeHelpSeq: string,
        @Query('companySeq') companySeq: number,
        @Query('keyword') keyword: string,
        @Query('param1') param1: string,
        @Query('param2') param2: string,
        @Query('param3') param3: string,
        @Query('param4') param4: string,
        @Query('conditionSeq') conditionSeq: string,
        @Query('pageCount') pageCount: number,
        @Query('pageSize') pageSize: number,
        @Query('subConditionSql') subConditionSql: string,
        @Query('accUnit') accUnit: string,
        @Query('bizUnit') bizUnit: number,
        @Query('factUnit') factUnit: number,
        @Query('deptSeq') deptSeq: number,
        @Query('wkDeptSeq') wkDeptSeq: number,
        @Query('empSeq') empSeq: number,
        @Query('userSeq') userSeq: number
    ): Promise<SimpleQueryResult> {
        const result = await this.codeHelpQueryService._SCACodeHelpQuery(
            workingTag,
            languageSeq,
            codeHelpSeq,
            companySeq,
            keyword,
            param1,
            param2,
            param3,
            param4,
            conditionSeq,
            pageCount,
            pageSize,
            subConditionSql,
            accUnit,
            bizUnit,
            factUnit,
            deptSeq,
            wkDeptSeq,
            empSeq,
            userSeq
        );
        return result;
    }
}
