import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { UserAuthService } from '../service/user.service';
import { AuthService } from '../service/auths.service';
import { TCAUserWEB } from '../entities/auths.entity';
import { sqlServerITMV20240117 } from 'src/config/database.config';
import { AuthController } from '../controller/auths.controller';
@Module({
    imports: [TypeOrmModule.forFeature([TCAUserWEB]), TypeOrmModule.forRoot(sqlServerITMV20240117),],
    providers: [
        DatabaseService,
        AuthService,
        UserAuthService
    ],
    controllers: [AuthController],
    exports: [],
})
export class AuthsModule { }
