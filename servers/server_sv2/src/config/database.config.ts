import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as oracledb from 'oracledb';

export const databaseConfig1: TypeOrmModuleOptions = {
  type: 'oracle',
  username: 'mighty',
  password: 'mighty',
  serviceName: 'ITMVMES',
  extra: {
    connectString: '192.168.35.202:1521/ITMVMES',
    user: 'mighty',
    password: 'mighty',
    role: oracledb.SYSDBA,
    externalAuth: false,
    poolMax: 200,
    poolMin: 20,
    poolIncrement: 20,
    poolTimeout: 60,
  },
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
};



export const sqlServerITMV20240117: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'YourStrongPassword!',
  database: 'ITMV20240117',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  cache: true,
  extra: {
    trustServerCertificate: true,
    encrypt: false,
    connectionTimeout: 5000,
    max: 100,
    min: 10,
    idleTimeoutMillis: 30000,
  },
  maxQueryExecutionTime: 1000
}