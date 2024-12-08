import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SimpleQueryResult } from 'src/common/interfaces/simple-query-result.interface';
import { DatabaseService } from 'src/common/database/sqlServer/ITMV20240117/database.service';
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from 'src/common/utils/constants';
import { TCAGroupsWEB } from '../entities/groups.entity';
import { TCAMenusWEB } from '../entities/menus.entity';

@Injectable()
export class SystemUsersService {
    constructor(
    @InjectRepository(TCAGroupsWEB)
    private readonly resTCAGroupsWEBRepository: Repository<TCAGroupsWEB>, 
    @InjectRepository(TCAMenusWEB)
    private readonly resTCAMenusWEBRepository: Repository<TCAMenusWEB>, 
    
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
            /* const user = await this.databaseService.findAuthByEmpID(userId);
            if (!user) {
                throw new NotFoundException('NULL_DATA_USER_SOS');
            } */
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
    

}
