import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class FindService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAllWithPagination11(
    tableName: string,
    page: number,
    limit: number,
    filters: Record<string, any> = {},
    orderBy: string = 'TRANS_TIME',
  ) {
    const offset = (page - 1) * limit;
    let filterQuery = '';
    const filterValues: any[] = [];

    Object.entries(filters).forEach(([key, value], index) => {
      if (value !== undefined) {
        filterQuery += `${index === 0 ? 'WHERE' : 'AND'} ${key} = :value${index} `;
        filterValues.push(value);
      }
    });

    filterValues.push(offset, limit);

    const dataQuery = `
      SELECT * FROM ${tableName}
      ${filterQuery}
      ORDER BY ${orderBy}
      OFFSET :offset ROWS FETCH NEXT :limit ROWS ONLY
    `;

    const totalQuery = `SELECT COUNT(*) as total FROM ${tableName} ${filterQuery ? ' ' + filterQuery : ''}`;

    const [data, totalResult] = await this.databaseService.executeMultipleQueries([dataQuery, totalQuery], [
      filterValues,
      filterValues.slice(0, filterValues.length - 2),
    ]);

    return {
      data,
      total: totalResult[0]?.TOTAL || 0,
      currentPage: page,
      pageSize: limit,
    };
  }
}
