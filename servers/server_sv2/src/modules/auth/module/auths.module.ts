import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from 'src/common/database/mssql/database.service';
import { UserAuthService } from '../service/user.service';
import { AuthService } from '../service/auths.service';
import { ERPUserWEB } from '../entities/auths.entity';
import { SQLSERVER_ERP } from 'src/config/database.config';
import { AuthController } from '../controller/auths.controller';
@Module({
    imports: [TypeOrmModule.forFeature([ERPUserWEB]), TypeOrmModule.forRoot(SQLSERVER_ERP),],
    providers: [
        DatabaseService,
        AuthService,
        UserAuthService
    ],
    controllers: [AuthController],
    exports: [],
})
export class AuthsModule { }
