import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , In} from 'typeorm';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAMenusWEB } from '../entities/menus.entity';
import { TCARootMenusWEB } from '../entities/rootMenus.entity';
import { TCARolesUsersWEB } from '../entities/rolesUsers.entity';
import { TCAUserWEB } from 'src/modules/auth/entities/auths.entity';
import { CreateResUsersDto } from '../dto/users.dto';
import { UpdateRoleDto } from '../dto/updateRole.dto';


@Injectable()
export class SystemUsersService {
  constructor(
    @InjectRepository(TCAGroupsWEB)
    private readonly resTCAGroupsWEBRepository: Repository<TCAGroupsWEB>,
    @InjectRepository(TCAMenusWEB)
    private readonly resTCAMenusWEBRepository: Repository<TCAMenusWEB>,

    @InjectRepository(TCARootMenusWEB)
    private readonly resTCARootMenusWEBRepository: Repository<TCARootMenusWEB>,

    @InjectRepository(TCARolesUsersWEB)
    private readonly resTCARolesUserWEBRepository: Repository<TCARolesUsersWEB>,


    private readonly databaseService: DatabaseService) { }

  async GetFilteredTCAUserWEB(userId: string, userName: string): Promise<SimpleQueryResult> {
    const query = `
      EXEC GetFilteredTCAUserWEB 
        @UserId = N'${userId}',
        @UserName = N'${userName}';
    `;

    try {
      const result = await this.databaseService.executeQuery(query);
      return { success: true, data: result };
    } catch (error) {
      return { success: false, message: ERROR_MESSAGES.DATABASE_ERROR };
    }
  }

  async createTCAGroupsWEB(
    userId: string,
    createResGroupsDto: Partial<TCAGroupsWEB>,
  ): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      const newGroup = this.resTCAGroupsWEBRepository.create(createResGroupsDto);
      const savedGroup = await this.resTCAGroupsWEBRepository.save(newGroup);
      return {
        success: true,
        message: SUCCESS_MESSAGES.RECORD_CREATED,
        data: savedGroup,
      };
    } catch (error) {
      throw new InternalServerErrorException(`Error creating group: ${error.message}`);
    }
  }

  async findAll(userId: string): Promise<{ data: TCAGroupsWEB[]; total: number }> {


    const [data, total] = await this.resTCAGroupsWEBRepository.findAndCount({
      order: {
        Id: 'DESC',
      },
    });

    return {
      data,
      total,
    };
  }



  async createMenu(
    userId: string,
    createUIMenu: Partial<TCAMenusWEB>,
  ): Promise<{ success: boolean; message: string; data?: TCAMenusWEB }> {
    const menu = this.resTCAMenusWEBRepository.create(createUIMenu);
    await this.resTCAMenusWEBRepository.save(menu);
    return {
      success: true,
      message: 'created successfully',
    };
  }

  async createRootMenu(
    userId: string,
    createUIRootMenu: Partial<TCARootMenusWEB>,
  ): Promise<{ success: boolean; message: string; data?: TCARootMenusWEB }> {
    const menu = this.resTCARootMenusWEBRepository.create(createUIRootMenu);
    await this.resTCARootMenusWEBRepository.save(menu);
    return {
      success: true,
      message: 'created successfully',
    };
  }
  async findAllRootMenu(
    filter: Record<string, any> = {},
    date?: string
  ): Promise<{ data: any[]; total: number; message: string }> {
    const query = this.resTCARootMenusWEBRepository.createQueryBuilder('menus');

    const addFilterCondition = (filterKey: string, dbField: string) => {
      const values = filter[filterKey];
      if (Array.isArray(values) && values.length > 0) {
        const conditions = values.map((_, index) => `${dbField} ILIKE :${filterKey}${index}`).join(' OR ');
        values.forEach((value, index) => query.setParameter(`${filterKey}${index}`, `%${value}%`));
        query.andWhere(`(${conditions})`);
      }
    };

    addFilterCondition('Label', 'menus.Label');
    addFilterCondition('Key', 'menus.Key');


    query.orderBy('menus.Id', 'DESC');

    const data = await query.getMany();

    return {
      data,
      total: data.length,
      message: 'Thành công',
    };
  }
  async findAllMenu(
    filter: Record<string, any> = {},
    date?: string
  ): Promise<{ data: any[]; total: number; message: string }> {
    const query = this.resTCAMenusWEBRepository.createQueryBuilder('menus');

    const addFilterCondition = (filterKey: string, dbField: string) => {
      const values = filter[filterKey];
      if (Array.isArray(values) && values.length > 0) {
        const conditions = values.map((_, index) => `${dbField} ILIKE :${filterKey}${index}`).join(' OR ');
        values.forEach((value, index) => query.setParameter(`${filterKey}${index}`, `%${value}%`));
        query.andWhere(`(${conditions})`);
      }
    };

    addFilterCondition('Label', 'menus.Label');
    addFilterCondition('Key', 'menus.Key');
    addFilterCondition('MenuRootId', 'menus.MenuRootId');
    addFilterCondition('MenuSubRootId', 'menus.MenuSubRootId');


    query.orderBy('menus.Id', 'DESC');

    const data = await query.getMany();

    return {
      data,
      total: data.length,
      message: 'Thành công',
    };
  }


  async getRootMenusNotInRole(groupId: number): Promise<TCARootMenusWEB[]> {
    try {
      const datas = await this.resTCARootMenusWEBRepository
        .createQueryBuilder('rootMenu')
        .leftJoin(
          TCARolesUsersWEB,
          'roleUser',
          'rootMenu.Id = roleUser.RootMenuId AND roleUser.GroupId = :groupId',
          { groupId }
        )
        .where('roleUser.RootMenuId IS NULL')
        .getMany();

      return datas.length === 0 ? [] : datas;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching datas from database');
    }
  }


  async getMenusNotInRole(groupId: number): Promise<TCAMenusWEB[]> {
    try {
      const datas = await this.resTCAMenusWEBRepository
        .createQueryBuilder('menu')
        .leftJoin(
          TCARolesUsersWEB,
          'roleUser',
          'menu.Id = roleUser.MenuId AND roleUser.GroupId = :groupId',
          { groupId }
        )
        .where('roleUser.MenuId IS NULL')
        .getMany();

      return datas.length === 0 ? [] : datas;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching datas from database');
    }
  }

  async getUsersNotInRole(groupId: number): Promise<CreateResUsersDto[]> {
    try {
      const query = `
        SELECT users."UserId" , users."UserSeq",  users."UserName", users."CompanySeq", users."CustSeq"
        FROM "_TCAUser_WEB" users
        LEFT JOIN "_TCARolesUsers_WEB" roleUser
          ON users."UserId" = roleUser."UserId" AND roleUser."GroupId" = ${groupId}
        WHERE roleUser."UserId" IS NULL;
        `;

      const datas = await this.databaseService.executeQuery(query);

      return datas.length === 0 ? [] : datas;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching datas from database');
    }
  }

  async createRolesRootMenu(
    userId: string,
    rootMenuIds: number[],
    groupId: number,
    type: string,
  ): Promise<{ success: boolean; message: string; data?: TCARolesUsersWEB }> {
    const rolesToCreate = rootMenuIds.map((item) => {
      return this.resTCARolesUserWEBRepository.create({
        GroupId: groupId,
        RootMenuId: item,
        Type: 'rootmenu',
      });
    });
    await this.resTCARolesUserWEBRepository.save(rolesToCreate);
    return {
      success: true,
      message: 'created successfully',
    };
  }

  async createRolesMenu(
    userId: string,
    menuIds: number[],
    groupId: number,
    type: string,
  ): Promise<{ success: boolean; message: string; data?: TCARolesUsersWEB }> {
    const rolesToCreate = menuIds.map((item) => {
      return this.resTCARolesUserWEBRepository.create({
        GroupId: groupId,
        MenuId: item,
        Type: 'menu',
      });
    });
    await this.resTCARolesUserWEBRepository.save(rolesToCreate);
    return {
      success: true,
      message: 'created successfully',
    };
  }

  async createRolesUsers(
    userId: string,
    userIds: string[],
    groupId: number,
    type: string,
  ): Promise<{ success: boolean; message: string; data?: TCARolesUsersWEB }> {
    const rolesToCreate = userIds.map((item) => {
      return this.resTCARolesUserWEBRepository.create({
        GroupId: groupId,
        UserId: item,
        Type: 'user',
      });
    });
    await this.resTCARolesUserWEBRepository.save(rolesToCreate);
    return {
      success: true,
      message: 'created successfully',
    };
  }


  async getPaginatedRootMenuRolesWithLabelsRaw(
    groupId: number,
    type: string,
    page: number,
    limit: number,
  ): Promise<{
    data: any[];
    total: number;
    totalPages: number;
  }> {
    try {
      const startRow = (page - 1) * limit + 1;
      const endRow = startRow + limit - 1;
      const data = await this.databaseService.executeQuery(
        `
         SELECT
                rolesUsers."Id" AS "Id",
                rolesUsers."View" AS "View",
                rolesUsers."Edit" AS "Edit",
                rolesUsers."Create" AS "Create",
                rolesUsers."Delete" AS "Delete",
                rolesUsers."RootMenuId" AS "RootMenuId",
                rolesUsers."MenuId" AS "MenuId",
                rolesUsers."GroupId" AS "GroupId",
                rolesUsers."UserId" AS "UserId",
                rolesUsers."Type" AS "Type",
                rolesUsers."Name" AS "Name",
                rootMenus."Label" AS "Label",
                ROW_NUMBER() OVER (ORDER BY rolesUsers."Id" ASC) AS row_num
            FROM "_TCARolesUsers_WEB" rolesUsers
            LEFT JOIN "_TCARootMenus_WEB" rootMenus
            ON rolesUsers."RootMenuId" = rootMenus."Id"
            WHERE rolesUsers."GroupId" = ${groupId}
              AND rolesUsers."Type" = 'rootmenu'
        `,
      );
      const totalResult = await this.databaseService.executeQuery(
        `
        SELECT COUNT(*) AS total
        FROM "_TCARolesUsers_WEB" rolesUsers
        WHERE rolesUsers."GroupId" = ${groupId}
          AND rolesUsers."Type" = 'rootmenu';
        `
      );

      const total = parseInt(totalResult[0]?.total || '0', 10);

      const totalPages = Math.ceil(total / limit);

      return {
        data,
        total,
        totalPages,
      };
    } catch (error) {
      console.error('Error fetching paginated roles with labels:', error);
      return {
        data: [],
        total: 0,
        totalPages: 0,
      };
    }
  }
  async getPaginatedMenuRolesWithLabelsRaw(
    groupId: number,
    type: string,
    page: number,
    limit: number,
  ): Promise<{
    data: any[];
    total: number;
    totalPages: number;
  }> {
    try {
      const data = await this.databaseService.executeQuery(
        `
        SELECT
                rolesUsers."Id" AS "Id",
                rolesUsers."View" AS "View",
                rolesUsers."Edit" AS "Edit",
                rolesUsers."Create" AS "Create",
                rolesUsers."Delete" AS "Delete",
                rolesUsers."RootMenuId" AS "RootMenuId",
                rolesUsers."MenuId" AS "MenuId",
                rolesUsers."GroupId" AS "GroupId",
                rolesUsers."UserId" AS "UserId",
                rolesUsers."Type" AS "Type",
                rolesUsers."Name" AS "Name",
                menus."Label" AS "Label",
                menus."Type" AS "MenuType",
                ROW_NUMBER() OVER (ORDER BY rolesUsers."Id" ASC) AS row_num
            FROM "_TCARolesUsers_WEB" rolesUsers
            LEFT JOIN "_TCAMenus_WEB" menus
            ON rolesUsers."MenuId" = menus."Id"
            WHERE rolesUsers."GroupId" = ${groupId}
              AND rolesUsers."Type" = 'menu'
        `,
      );
      const totalResult = await this.databaseService.executeQuery(
        `
        SELECT COUNT(*) AS total
        FROM "_TCARolesUsers_WEB" rolesUsers
        WHERE rolesUsers."GroupId" = ${groupId}
          AND rolesUsers."Type" = 'menu';
        `
      );

      const total = parseInt(totalResult[0]?.total || '0', 10);

      const totalPages = Math.ceil(total / limit);

      return {
        data,
        total,
        totalPages,
      };
    } catch (error) {
      console.error('Error fetching paginated roles with labels:', error);
      return {
        data: [],
        total: 0,
        totalPages: 0,
      };
    }
  }

  async getPaginatedUserRolesWithLabelsRaw(
    groupId: number,
    type: string,
    page: number,
    limit: number,
  ): Promise<{
    data: any[];
    total: number;
    totalPages: number;
  }> {
    try {
      const data = await this.databaseService.executeQuery(
        `
       SELECT
          rolesUsers."Id" AS "Id",
          rolesUsers."UserId" AS "UserId",
          rolesUsers."Type" AS "Type",
          rolesUsers."Name" AS "Name",
          Users."UserName" AS "UserName"
      FROM "_TCARolesUsers_WEB" rolesUsers
      LEFT JOIN "_TCAUser_WEB" users
      ON rolesUsers."UserId" = users."UserId"
      WHERE rolesUsers."GroupId" = ${groupId}
        AND rolesUsers."Type" = 'user'
        `,
      );
      const totalResult = await this.databaseService.executeQuery(
        `
        SELECT COUNT(*) AS total
        FROM "_TCARolesUsers_WEB" rolesUsers
        WHERE rolesUsers."GroupId" = ${groupId}
          AND rolesUsers."Type" = 'user';
        `
      );

      const total = parseInt(totalResult[0]?.total || '0', 10);

      const totalPages = Math.ceil(total / limit);

      return {
        data,
        total,
        totalPages,
      };
    } catch (error) {
      return {
        data: [],
        total: 0,
        totalPages: 0,
      };
    }
  }



  async updateRoles(updateData: UpdateRoleDto[]): Promise<any> {
    const updatePromises = updateData.map(async (update) => {
      const { id, column, value } = update;

      await this.resTCARolesUserWEBRepository
        .createQueryBuilder()
        .update()
        .set({ [column]: value })
        .where('Id = :id', { id })
        .execute();
    });

    await Promise.all(updatePromises);

    return { message: 'Roles updated successfully' };
  }

  async deleteRolesByIds(ids: number[]): Promise<any> {
    try {
      const result = await this.resTCARolesUserWEBRepository.delete({ Id: In(ids) });
      if (result.affected > 0) {
        return {
          success: true,
          message: `${result.affected} record(s) deleted successfully`,
        };
      } else {
        return {
          success: false,
          message: 'No records found to delete',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Error while deleting records',
        error: error.message,
      };
    }
  }


  async deleteGroupsByIds(ids: number[]): Promise<any> {
    try {
      const result = await this.resTCAGroupsWEBRepository.delete({ Id: In(ids) });
  
      if (result.affected > 0) {
        const result2 = await this.resTCARolesUserWEBRepository.delete({ GroupId: In(ids) });
  
        return {
          success: true,
          message: `${result.affected} group(s) deleted successfully, and ${result2.affected} related record(s) deleted successfully`,
        };
      } else {
        return {
          success: false,
          message: 'No groups found to delete.',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Error while deleting records.',
        error: error.message,
      };
    }
  }
  
  async deleteMennusByIds(ids: number[]): Promise<any> {
    try {
      const existingRecords = await this.resTCARolesUserWEBRepository.find({
        where: {
          MenuId: In(ids),
        },
      });
      if (existingRecords.length > 0) {
        return {
          success: false,
          message: 'Cannot delete menus because there are related records in TCARolesUsersWEB.',
        };
      }
  
      const result = await this.resTCAMenusWEBRepository.delete({ Id: In(ids) });
  
      if (result.affected > 0) {
        return {
          success: true,
          message: `${result.affected} record(s) deleted successfully`,
        };
      } else {
        return {
          success: false,
          message: 'No records found to delete',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Error while deleting records',
        error: error.message,
      };
    }
  }
  

  async deleteRootMenusByIds(ids: number[]): Promise<any> {
    try {
      const existingRecords = await this.resTCARolesUserWEBRepository.find({
        where: {
          RootMenuId: In(ids),
        },
      });
  
      if (existingRecords.length > 0) {
        return {
          success: false,
          message: 'Cannot delete root menus because there are related records in TCARolesUsersWEB.',
        };
      }
  
      const result = await this.resTCARootMenusWEBRepository.delete({ Id: In(ids) });
  
      if (result.affected > 0) {
        return {
          success: true,
          message: `${result.affected} record(s) deleted successfully`,
        };
      } else {
        return {
          success: false,
          message: 'No records found to delete',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: 'Error while deleting records.',
        error: error.message,
      };
    }
  }

}
