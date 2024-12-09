// user.service.ts
import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ERPUserWEB } from '../entities/auths.entity';

@Injectable()
export class UserAuthService {
    constructor(
        @InjectRepository(ERPUserWEB)
        private readonly ERPUserWEBRepository: Repository<ERPUserWEB>,
    ) { }

    async findAuthByEmpID(UserId: string): Promise<ERPUserWEB> {
        try {
            const user = await this.ERPUserWEBRepository.findOne({ where: { UserId } });
            return user;
        } catch (error) {
            throw new NotFoundException(`User with login ${UserId} not found`);
        }
    }


   

}
