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
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { SystemUsersService } from '../service/systemUsers.service';
import { CreateResGroupsDto } from '../dto/groups.dto';
import { Request, Response } from 'express';
import { jwtConstants } from 'src/config/security.config';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAMenusWEB } from '../entities/menus.entity';


@Controller('v1/mssql/system-users')
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
    async create(
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

    @Get('itm-menu-all')
    async findAllMenu(
      @Param('userId') userId: string, 
      @Query() filter: Record<string, any>, 
    ) {
      return this.systemUsersService.findAllMenu(filter); 
    }



}
