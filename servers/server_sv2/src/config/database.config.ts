import { TypeOrmModuleOptions } from '@nestjs/typeorm';


export const SQLSERVER_ERP: TypeOrmModuleOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: 'YourStrongPassword!',
  database: 'ERPCLOUD',
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
