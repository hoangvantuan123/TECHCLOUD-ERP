import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class DeleteService {
  constructor(private readonly databaseService: DatabaseService) {}

  async deleteRecord(tableName: string, id: number) {
    const query = `DELETE FROM ${tableName} WHERE ID = :id`;
    await this.databaseService.executeQuery(query, [id]);

    return { message: 'Record deleted successfully' };
  }
}
