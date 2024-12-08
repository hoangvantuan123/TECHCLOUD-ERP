import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { SUCCESS_MESSAGES } from '../../utils/constants';

@Injectable()
export class CreatesImportService {
  constructor(private readonly databaseService: DatabaseService) { }

  async insertDataIntoDB(tableName: string, data: any[]) {
    const batchSize = 1200;
    const totalBatches = Math.ceil(data.length / batchSize);

    for (let i = 0; i < totalBatches; i++) {
      const batch = data.slice(i * batchSize, (i + 1) * batchSize);

      let sql = `INSERT ALL `;
      const bindParams = [];

      batch.forEach((row, index) => {
        sql += `INTO ${tableName} (PLANT, MATERIAL_LOT, PCB_BARCODE, TRANS_TIME, USER_ID, LOT_NUMBER, XOUT_QTY) 
                VALUES (:plant${index}, :materialLot${index}, :pcbBarcode${index}, :transTime${index}, 
                        :userId${index}, :lotNumber${index}, :xoutQty${index}) `;

        bindParams.push(
          row.PLANT, row.MATERIAL_LOT, row.PCB_BARCODE, row.TRANS_TIME,
          row.USER_ID, row.LOT_NUMBER, row.XOUT_QTY
        );
      });
      sql += 'SELECT 1 FROM DUAL';
      await this.databaseService.executeQuery(sql, bindParams);
    }

    return { message: SUCCESS_MESSAGES.BATCHES_INSERTED };
  }
}
