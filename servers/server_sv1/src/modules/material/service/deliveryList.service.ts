import { Injectable } from '@nestjs/common';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class DeliveryListService {
    constructor(private readonly databaseService: DatabaseService) { }

    async ITM_SUGGetActiveDelivery_WEB(fromDate: string, toDate: string, deliveryNo: string, bizUnit: number): Promise<SimpleQueryResult> {
        const query = `
      EXEC ITM_SUGGetActiveDelivery_WEB 
        @pFromDate = '${fromDate}',
        @pToDate = '${toDate}',
        @pDeliveryNo = '${deliveryNo}',
        @pBizUnit = ${bizUnit};
    `;

        try {
            const result = await this.databaseService.executeQuery(query);
            return { success: true, data: result };
        } catch (error) {
            return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
        }
    }





}
