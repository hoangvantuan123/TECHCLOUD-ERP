import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class CreateService {
  constructor(private readonly databaseService: DatabaseService) { }

  async createRecords(tableName: string, columns: string[], records: any[][]) {
    const columnString = columns.join(', ');
    const valuePlaceholders = columns.map((_, index) => `:value${index}`).join(', ');
    const query = `INSERT INTO ${tableName} (${columnString}) VALUES (${valuePlaceholders})`;

    const params = records[0].map((value) => value);
    await this.databaseService.executeQuery(query, params);

    return { message: 'Record created successfully' };
  }
}
