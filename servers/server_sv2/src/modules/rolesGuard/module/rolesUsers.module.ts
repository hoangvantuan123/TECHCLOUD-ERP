import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SQLSERVER_ERP } from 'src/config/database.config';
import { DatabaseService } from 'src/common/database/mssql/database.service';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAMenusWEB } from '../entities/menus.entity';
import { TCARolesUsersWEB } from '../entities/rolesUsers.entity';
import { SystemUsersService } from '../service/systemUsers.service';
import { SystemUsersController } from '../controller/systemUsers.controller';
import { TCARootMenusWEB } from '../entities/rootMenus.entity';
@Module({
    imports: [TypeOrmModule.forFeature([TCAGroupsWEB, TCAMenusWEB, TCARolesUsersWEB, TCARootMenusWEB]), TypeOrmModule.forRoot(SQLSERVER_ERP),],
    providers: [
        DatabaseService,
        SystemUsersService
    ],
    controllers: [SystemUsersController],
    exports: [],
})
export class RolesUsersModule { }
