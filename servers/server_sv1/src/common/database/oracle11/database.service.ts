import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, QueryRunner } from 'typeorm';
import { ERROR_MESSAGES } from '../../utils/constants';

@Injectable()
export class DatabaseService {
  private queryRunner: QueryRunner;

  constructor(@InjectConnection() private readonly connection: Connection) {
    this.queryRunner = this.connection.createQueryRunner();
  }

  async startTransaction() {
    if (!this.queryRunner.isTransactionActive) {
      await this.queryRunner.connect();
      await this.queryRunner.startTransaction();
    }
  }

  async commitTransaction() {
    if (this.queryRunner.isTransactionActive) {
      await this.queryRunner.commitTransaction();
    }
  }

  async rollbackTransaction() {
    if (this.queryRunner.isTransactionActive) {
      await this.queryRunner.rollbackTransaction();
    }
  }

  async releaseQueryRunner() {
    if (this.queryRunner.isReleased) {
      return;
    }
    await this.queryRunner.release();
  }

  async executeQuery(query: string, parameters: any[] = []) {
    try {
      if (this.queryRunner.isTransactionActive) {
        return await this.queryRunner.query(query, parameters);
      } else {
        return await this.connection.query(query, parameters);
      }
    } catch (error) {
      console.error(ERROR_MESSAGES.EXECUTING_QUERY, error);
      throw error;
    }
  }


  async executeMultipleQueries(queries: string[], parameters: any[][]) {
    try {
      const promises = queries.map((query, index) =>
        this.executeQuery(query, parameters[index])
      );
      return await Promise.all(promises);
    } catch (error) {
      console.error(ERROR_MESSAGES.MULTIPLE_QUERIES, error);
      throw error;
    }
  }
}
