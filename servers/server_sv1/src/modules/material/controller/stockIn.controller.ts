import { Controller, Get, Query, Body, Post, HttpException, HttpStatus } from '@nestjs/common';
import { StockInService } from '../service/stockIn.service';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';

@Controller('v1/mssql/stock-in')
export class EmployeeController {
    constructor(private readonly stockInService: StockInService) { }

    @Get('convert-dc')
    async convertDC(
        @Query('itemNo') itemNo: string,
        @Query('prodDate1') prodDate1: string,
        @Query('inDate1') inDate1: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockInService.ITM_SConvertDC(itemNo, prodDate1, inDate1);
        return result;
    }


    @Get('itm-sug-get-active-delivery-item')
    async processITMSUGGetActiveDeliveryItem(
        @Query('deliverySeq') deliverySeq: number,
        @Query('purchaseType') purchaseType: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.stockInService.ITM_SUGGetActiveDeliveryItem(deliverySeq, purchaseType);
        return result;
    }


    @Post('smaterial-qr-check-web')
    async processSMaterialQRCheckWeb(@Body() body: any): Promise<SimpleQueryResult> {
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
        return this.stockInService._SMaterialQRCheck_WEB(
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


    @Post('scom-close-check-web')
    async processSCOMCloseCheckWEB(@Body() body: any): Promise<SimpleQueryResult> {
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
        return this.stockInService._SCOMCloseCheck_WEB(
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

    @Post('scom-close-item-check-web')
    async processSCOMCloseItemCheckWEB(@Body() body: any): Promise<SimpleQueryResult> {
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
        return this.stockInService._SCOMCloseItemCheck_WEB(
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
    @Post('ssl-imp-delv-master-check-web')
    async processSSLImpDelvMasterCheckWEB(@Body() body: any): Promise<SimpleQueryResult> {
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
        return this.stockInService._SSLImpDelvMasterCheck_WEB(
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
    @Post('ssl-imp-delv-sheet-check-web')
    async processSSLImpDelvSheetCheckWEB(@Body() body: any): Promise<SimpleQueryResult> {
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
        return this.stockInService._SSLImpDelvSheetCheck_WEB(
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

    /* CHECK ALL STOCKIN */

    @Post('check-all-procedures-stock-in')
    async checkAllProceduresStockIn(@Body() body: any) {
        try {
            const { dataSave, xmlDocument, ...otherParams } = body;
            const procedureData = [
                { name: '_SCOMCloseCheck_WEB', xmlDocument: xmlDocument.xmlForCloseCheck, serviceSeq: 2639 },
                { name: '_SCOMCloseItemCheck_WEB', xmlDocument: xmlDocument.xmlForCloseItemCheck, serviceSeq: 2639 },
                { name: '_SSLImpDelvMasterCheck_WEB', xmlDocument: xmlDocument.xmlForMasterCheck, serviceSeq: 4493 },
                { name: '_SSLImpDelvSheetCheck_WEB', xmlDocument: xmlDocument.xmlForSheetCheck, serviceSeq: 4493 },
                { name: '_SLGLotNoMasterCheck_WEB', xmlDocument: xmlDocument.xmlForLotNoMasterCheck, serviceSeq: 4422 }
            ];

            const result = await this.stockInService.checkAllProceduresStockIn(
                procedureData,
                otherParams.xmlFlags,
                otherParams.workingTag,
                otherParams.companySeq,
                otherParams.languageSeq,
                otherParams.userSeq,
                otherParams.pgmSeq, 
                dataSave
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
