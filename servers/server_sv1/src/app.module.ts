import { Module, MiddlewareConsumer, OnModuleInit } from '@nestjs/common';
import * as cors from 'cors';
import { TypeOrmModule, InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { HealthController } from './health.controller';
import { sqlServerITMV20240117 } from './config/database.config';
import { APP_FILTER } from '@nestjs/core';
import { MaterialModule } from './modules/material/module/material.module';
import { CodeHelpComboQueryModule } from './modules/codeHelp/module/codeHelpComboQuery.module';
import { AuthsModule } from './modules/auth/module/auths.module';
import { RolesUsersModule } from './modules/rolesGuard/module/rolesUsers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    /*  TypeOrmModule.forRoot(databaseConfig1), */
    TypeOrmModule.forRoot({
      ...sqlServerITMV20240117,
      name: 'ITMV20240117',
    }),
    MaterialModule,
    CodeHelpComboQueryModule
  ],
  providers: [{
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  }],
  controllers: [HealthController],
})
export class AppModule implements OnModuleInit {
  constructor(
    @InjectConnection('ITMV20240117') private readonly connection2: Connection,
  ) { }

  async onModuleInit() {


    if (this.connection2.isConnected) {
      console.log('ITMV20240117 connected');
    } else {
      console.error('Failed to connect to the second database');
    }
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cors()).forRoutes('*');
  }
}
