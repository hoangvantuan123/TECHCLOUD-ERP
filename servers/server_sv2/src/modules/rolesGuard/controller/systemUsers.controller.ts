import {
    Controller,
    Get,
    Post,
    HttpStatus,
    Body,
    Param,
    Put,
    Delete,
    Query,
    Req,
    Res,
    UnauthorizedException,
    NotFoundException
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { SystemUsersService } from '../service/systemUsers.service';
import { CreateResGroupsDto } from '../dto/groups.dto';
import { Request, Response } from 'express';
import { jwtConstants } from 'src/config/security.config';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAMenusWEB } from '../entities/menus.entity';
import { TCARootMenusWEB } from '../entities/rootMenus.entity';
import { TCARolesUsersWEB } from '../entities/rolesUsers.entity';
import { TCAUserWEB } from 'src/modules/auth/entities/auths.entity';
import { CreateResUsersDto } from '../dto/users.dto';
import { UpdateRoleDto } from '../dto/updateRole.dto';


@Controller('v2/mssql/system-users')
export class SystemUsersController {
    constructor(private readonly systemUsersService: SystemUsersService) { }

    @Get('itm-roles-data-users-web')
    async convertDC(
        @Query('userId') userId: string,
        @Query('userName') userName: string,
    ): Promise<SimpleQueryResult> {
        const result = await this.systemUsersService.GetFilteredTCAUserWEB(userId, userName);
        return result;
    }

    @Post('itm-groups')
    async groupRoles(
        @Req() req: Request,
        @Body() createResGroupsDto: Partial<CreateResGroupsDto>,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createTCAGroupsWEB(
                userId,
                createResGroupsDto
            );
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }

    @Get('itm-groups-all')
    async findAll(
        @Req() req: Request,
    ): Promise<{ data: any[]; total: number }> {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new UnauthorizedException(
                'The job version has expired. Please log in again to continue.',
            );
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new UnauthorizedException('Token missing');
        }

        try {

            const userId = 'VM32402882'
            return this.systemUsersService.findAll(userId);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }



    @Post('itm-menu')
    async createMenu(
        @Body() createUIMenu: TCAMenusWEB,
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createMenu(userId, createUIMenu);
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }
    @Post('itm-root-menu')
    async createRootMenu(
        @Body() createUIRootMenu: TCARootMenusWEB,
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createRootMenu(userId, createUIRootMenu);
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }

    @Get('itm-root-menu-all')
    async findAllRootMenu(
        @Param('userId') userId: string,
        @Query() filter: Record<string, any>,
    ) {
        return this.systemUsersService.findAllRootMenu(filter);
    }
    @Get('itm-menu-all')
    async findAllMenu(
        @Param('userId') userId: string,
        @Query() filter: Record<string, any>,
    ) {
        return this.systemUsersService.findAllMenu(filter);
    }

    @Get('root-menus-not-in-role')
    async getRootMenusNotInRole(@Query('groupId') groupId: number): Promise<TCARootMenusWEB[]> {
        if (!groupId) {
            throw new NotFoundException('GroupId is required');
        }

        return await this.systemUsersService.getRootMenusNotInRole(groupId);
    }




    @Get('menus-not-in-role')
    async getMenusNotInRole(@Query('groupId') groupId: number): Promise<TCAMenusWEB[]> {
        if (!groupId) {
            throw new NotFoundException('GroupId is required');
        }

        return await this.systemUsersService.getMenusNotInRole(groupId);
    }
    @Get('users-not-in-role')
    async getUsersNotInRole(@Query('groupId') groupId: number): Promise<CreateResUsersDto[]> {
        if (!groupId) {
            throw new NotFoundException('GroupId is required');
        }

        return await this.systemUsersService.getUsersNotInRole(groupId);
    }


    @Post('itm-roles-root-menus')
    async createRolesRootMenus(
        @Body() body: { rootMenuIds: number[], groupId: number, type: string },
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const rootMenuIds = body.rootMenuIds;
            const groupId = body.groupId;
            const type = body.type;
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createRolesRootMenu(userId, rootMenuIds, groupId, type);
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }
    @Post('itm-roles-menus')
    async createRolesMenus(
        @Body() body: { menuIds: number[], groupId: number, type: string },
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const menuIds = body.menuIds;
            const groupId = body.groupId;
            const type = body.type;
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createRolesMenu(userId, menuIds, groupId, type);
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }
    @Post('itm-roles-users')
    async createRolesUsers(
        @Body() body: { userIds: string[], groupId: number, type: string },
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<Response> {
        try {
            const userIds = body.userIds;
            const groupId = body.groupId;
            const type = body.type;
            const userId = 'VM32402882'
            const result = await this.systemUsersService.createRolesUsers(userId, userIds, groupId, type);
            return res.status(HttpStatus.OK).json(result);
        } catch (error) {
            throw new UnauthorizedException(
                'Request sending failed, please try again!',
            );
        }
    }


    /* roles-paginated?groupId=3&type=rootmenu&page=1&limit=5 */
    @Get('roles-paginated-root-menu')
    async getPaginatedRoles(
        @Query('groupId') groupId: number,
        @Query('type') type: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Res() res: Response,
    ) {
        try {
            if (!groupId || !type) {
                return res.status(HttpStatus.OK).json({
                    success: true,
                    message: 'No data found due to missing parameters',
                    data: [],
                    total: 0,
                    totalPages: 0,
                    currentPage: page,
                });
            }

            const result = await this.systemUsersService.getPaginatedRootMenuRolesWithLabelsRaw(
                groupId,
                type,
                page,
                limit,
            );

            return res.status(HttpStatus.OK).json({
                success: true,
                message: 'Data retrieved successfully',
                data: result.data,
                total: result.total,
                totalPages: result.totalPages,
                currentPage: page,
            });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: error.message || 'Error fetching data',
            });
        }
    }
    @Get('roles-paginated-menu')
    async getPaginatedMenuRolesWithLabelsRaw(
        @Query('groupId') groupId: number,
        @Query('type') type: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Res() res: Response,
    ) {
        try {
            if (!groupId || !type) {
                return res.status(HttpStatus.OK).json({
                    success: true,
                    message: 'No data found due to missing parameters',
                    data: [],
                    total: 0,
                    totalPages: 0,
                    currentPage: page,
                });
            }

            const result = await this.systemUsersService.getPaginatedMenuRolesWithLabelsRaw(
                groupId,
                type,
                page,
                limit,
            );

            return res.status(HttpStatus.OK).json({
                success: true,
                message: 'Data retrieved successfully',
                data: result.data,
                total: result.total,
                totalPages: result.totalPages,
                currentPage: page,
            });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: error.message || 'Error fetching data',
            });
        }
    }
    @Get('roles-paginated-users')
    async getPaginatedUserRolesWithLabelsRaw(
        @Query('groupId') groupId: number,
        @Query('type') type: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Res() res: Response,
    ) {
        try {
            if (!groupId || !type) {
                return res.status(HttpStatus.OK).json({
                    success: true,
                    message: 'No data found due to missing parameters',
                    data: [],
                    total: 0,
                    totalPages: 0,
                    currentPage: page,
                });
            }

            const result = await this.systemUsersService.getPaginatedUserRolesWithLabelsRaw(
                groupId,
                type,
                page,
                limit,
            );

            return res.status(HttpStatus.OK).json({
                success: true,
                message: 'Data retrieved successfully',
                data: result.data,
                total: result.total,
                totalPages: result.totalPages,
                currentPage: page,
            });
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: error.message || 'Error fetching data',
            });
        }
    }


    @Post('update/roles-user')
    async updateRoles(@Body() updateData: UpdateRoleDto[]) {
        return this.systemUsersService.updateRoles(updateData);
    }

    @Delete('delete/roles-user')
    async deleteRoles(@Body() body: { ids: number[] }): Promise<any> {
        const { ids } = body;
        return await this.systemUsersService.deleteRolesByIds(ids);
    }

    @Delete('delete/groups')
    async deleteGroups(@Body() body: { ids: number[] }): Promise<any> {
        const { ids } = body;
        return await this.systemUsersService.deleteGroupsByIds(ids);
    }

    @Delete('delete/menus')
    async deleteMenus(@Body() body: { ids: number[] }): Promise<any> {
        const { ids } = body;
        return await this.systemUsersService.deleteMennusByIds(ids);
    }
    @Delete('delete/root-menu')
    async deleteRootMenus(@Body() body: { ids: number[] }): Promise<any> {
        const { ids } = body;
        return await this.systemUsersService.deleteRootMenusByIds(ids);
    }
}
