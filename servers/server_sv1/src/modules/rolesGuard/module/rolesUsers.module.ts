import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { sqlServerITMV20240117 } from 'src/config/database.config';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAGroupUsersWEB } from '../entities/groupUsers.entity';
import { TCAMenusWEB } from '../entities/menus.entity';
import { TCARolesUsersWEB } from '../entities/rolesUsers.entity';
import { SystemUsersService } from '../service/systemUsers.service';
import { SystemUsersController } from '../controller/systemUsers.controller';
@Module({
    imports: [TypeOrmModule.forFeature([TCAGroupsWEB, TCAGroupUsersWEB, TCAMenusWEB, TCARolesUsersWEB]), TypeOrmModule.forRoot(sqlServerITMV20240117),],
    providers: [
        DatabaseService,
        SystemUsersService
    ],
    controllers: [SystemUsersController],
    exports: [],
})
export class RolesUsersModule { }
