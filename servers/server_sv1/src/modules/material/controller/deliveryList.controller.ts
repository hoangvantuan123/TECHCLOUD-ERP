import { Controller, Get, Query } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DeliveryListService } from '../service/deliveryList.service';

@Controller('v1/mssql/deliverry-list')
export class DeliveryListController {
    constructor(private readonly deliverryService: DeliveryListService) { }

    @Get('itm-sug-get-active-delivery-web')
    async convertDC(
        @Query('fromDate') fromDate: string,
        @Query('toDate') toDate: string,
        @Query('deliveryNo') deliveryNo: string,
        @Query('delivbizUniteryNo') bizUnit: number,
    ): Promise<SimpleQueryResult> {
        const result = await this.deliverryService.ITM_SUGGetActiveDelivery_WEB(fromDate, toDate, deliveryNo, bizUnit);
        return result;
    }

}
