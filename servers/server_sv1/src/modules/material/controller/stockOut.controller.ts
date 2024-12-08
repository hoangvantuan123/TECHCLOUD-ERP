import { Controller, Get, Query, Post, Body, Req, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { StockOutService } from '../service/stockOut.service';
import { jwtConstants } from 'src/config/security.config';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

@Controller('v1/mssql/stock-out')
export class StockOutController {
    constructor(private readonly stockOutService: StockOutService) { }


    @Post('sp-dmm-out-req-list')
    async processSPDMMOutReqListQueryWeb(@Body() body: any): Promise<SimpleQueryResult> {
        const {
            xmlDocument,
            xmlFlags,
            serviceSeq,
            workingTag,
            companySeq,
            languageSeq,
            userSeq,
            pgmSeq,
        } = body;
        return this.stockOutService._SPDMMOutReqListQuery_Web(
            xmlDocument,
            xmlFlags,
            serviceSeq,
            workingTag,
            companySeq,
            languageSeq,
            userSeq,
            pgmSeq,
        );
    }

    @Get('itm-spd-mm-out-req-item-list')
    async processITMSPDMMOutReqItemListWEB(
        @Query('outReqSeq') outReqSeq: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockOutService.ITM_SPDMMOutReqItemList_WEB(outReqSeq);
        return result;
    }



    @Post('smaterial-qr-check-stock-out-web')
    async processSMaterialQRStockOutCheckWEB(
        @Body() body: any,
        @Req() req: Request
    ): Promise<SimpleQueryResult> {
        const {
            xmlDocument,
            xmlFlags,
            serviceSeq,
            workingTag,
            companySeq,
            languageSeq,
            pgmSeq,
        } = body;

        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }

        try {
            const decodedToken = jwt.verify(token, jwtConstants.secret) as { UserId: any, EmpSeq: any, UserSeq: any, CompanySeq: any };
            if (!decodedToken.EmpSeq && !decodedToken.EmpSeq && !decodedToken.UserSeq && !decodedToken.CompanySeq) {
                throw new UnauthorizedException('You do not have permission to access this API.');
            }

            return await this.stockOutService._SMaterialQRStockOutCheck_WEB(
                xmlDocument,
                xmlFlags,
                serviceSeq,
                workingTag,
                languageSeq,
                pgmSeq,
                decodedToken
            );
        } catch (error) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }
    }




    @Post('check-all-procedures-stock-out-fifo')
    async checkAllProceduresStockIn(@Body() body: any, @Req() req: Request) {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            throw new UnauthorizedException('You do not have permission to access this API.');
        }
        try {
            const decodedToken = jwt.verify(token, jwtConstants.secret) as { UserId: any, EmpSeq: any, UserSeq: any, CompanySeq: any };
            if (!decodedToken.EmpSeq && !decodedToken.EmpSeq && !decodedToken.UserSeq && !decodedToken.CompanySeq) {
                throw new UnauthorizedException('You do not have permission to access this API.');
            }


            const { dataSave, xmlDocument, ...otherParams } = body;

            const procedureData = [
                { name: '_SCOMCloseCheck_WEB', xmlDocument: xmlDocument.xmlSCOMCloseCheckWEB, serviceSeq: 2639 },
                { name: '_SCOMCloseItemCheck_WEB', xmlDocument: xmlDocument.xmlSCOMCloseItemCheckWEB, serviceSeq: 2639 },
                { name: '_SPDMMOutProcCheck_WEB', xmlDocument: xmlDocument.xmlSPDMMOutProcCheckWEB, serviceSeq: 3033 },
                { name: '_SPDMMOutProcItemCheck_WEB', xmlDocument: xmlDocument.xmlSPDMMOutProcItemCheckWEB, serviceSeq: 3033 },
            ];
            const result = await this.stockOutService.checkAllProceduresStockOutFiFo(
                procedureData,
                otherParams.xmlFlags,
                otherParams.workingTag,
                otherParams.languageSeq,
                otherParams.pgmSeq,
                dataSave,
                decodedToken
            );
            return result;
        } catch (error) {
            throw new HttpException(
                { message: error.message || 'Internal Server Error' },
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

}
