import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, QueryRunner } from 'typeorm';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';

@Injectable()
export class DatabaseService {
  private queryRunner: QueryRunner;

  constructor(@InjectConnection('ITMV20240117') private readonly ITMV20240117: Connection) {
    this.queryRunner = this.ITMV20240117.createQueryRunner();
    this.checkConnection();
  }

  private async checkConnection() {
    try {
      if (this.ITMV20240117.isConnected) {
        console.log(SUCCESS_MESSAGES.SUCCESS_ITMV20240117);
      } else {
        console.error(ERROR_MESSAGES.ERROR_ITMV20240117);
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
      return { success: false, message: 'An error occurred while executing the query.' };
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
      return { success: false, message: 'An error occurred while executing the query.' };
    }
  }


  async findAuthByEmpID(UserId: string): Promise<any> {
    const query = `SELECT * FROM _TCAUser_WEB WHERE UserId = '${UserId}'`;

    try {
      const result = await this.queryRunner.query(query);

      if (!result || result.length === 0) {
        throw new NotFoundException(`User with UserId ${UserId} not found`);
      }

      return result[0];
    } catch (error) {
      console.error(`Error executing query for UserId ${UserId}:`, error);
      return { success: false, message: 'An error occurred while executing the query.' };
    }
  }


  async findAuthCheckUser(UserId: any, EmpSeq: any, UserSeq: any): Promise<any[]> {
    const query = `
        SELECT  UserId , EmpSeq, UserSeq
        FROM _TCAUser_WEB 
        WHERE UserId = '${UserId}' 
          AND EmpSeq = '${EmpSeq}' 
          AND UserSeq = '${UserSeq}'
    `;

    try {
      const result = await this.queryRunner.query(query);
      return result || [];
    } catch (error) {
      return [];
    }
  }


}
