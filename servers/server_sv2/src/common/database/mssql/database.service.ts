import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, QueryRunner } from 'typeorm';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class DatabaseService {
  private queryRunner: QueryRunner;

  constructor(@InjectConnection('SQLSERVER_ERP') private readonly SQLSERVER_ERP: Connection) {
    this.queryRunner = this.SQLSERVER_ERP.createQueryRunner();
    this.checkConnection();
  }

  private async checkConnection() {
    try {
      if (this.SQLSERVER_ERP.isConnected) {
        console.log(SUCCESS_MESSAGES.SUCCESS_SQLSERVER_ERP);
      } else {
        console.error(ERROR_MESSAGES.ERROR_SQLSERVER_ERP);
      }
    } catch (error) {
      console.error(ERROR_MESSAGES.DATABASE_ERROR, error);
    }
  }

  async executeQuery(query: string): Promise<any> {
    try {
      const result = await this.queryRunner.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async executeQueryParams(query: string, params: any[]): Promise<any> {
    try {
      const result = await this.queryRunner.query(query, params);
      return result;
    } catch (error) {
      throw error;
    }
  }




  async executeQueryTest(query: string): Promise<any> {
    try {
      const result = await this.queryRunner.query(query);

      if (Array.isArray(result)) {
        return result;
      }

      return { message: 'Query executed successfully', result: result };
    } catch (error) {
      throw error;
    }
  }


 async findAuthByEmpID(UserId: string): Promise<any> {
  const query = `SELECT * FROM "_ERPUser_WEB" WHERE "UserId" = '${UserId}'`;

  try {
    const result = await this.queryRunner.query(query);

    if (!result || result.length === 0) {
      throw new NotFoundException(`UserId ${UserId} not found in the system`);
    }

    return result[0];
  } catch (error) {
    throw error;
  }
}


}