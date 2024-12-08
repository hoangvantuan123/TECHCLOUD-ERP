import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class UpdateService {
  constructor(private readonly databaseService: DatabaseService) {}

  async updateRecord(tableName: string, id: number, data: Record<string, any>) {
    const updates = Object.keys(data)
      .map((key, index) => `${key} = :value${index}`)
      .join(', ');
    const values = Object.values(data);
    const query = `
      UPDATE ${tableName}
      SET ${updates}
      WHERE ID = :id
    `;
    await this.databaseService.executeQuery(query, [...values, id]);

    return { message: 'Record updated successfully' };
  }
}
