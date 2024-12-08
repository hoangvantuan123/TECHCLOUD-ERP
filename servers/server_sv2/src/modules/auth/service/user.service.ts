// user.service.ts
import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TCAUserWEB } from '../entities/auths.entity';

@Injectable()
export class UserAuthService {
    constructor(
        @InjectRepository(TCAUserWEB)
        private readonly TCAUserWEBRepository: Repository<TCAUserWEB>,
    ) { }

    async findAuthByEmpID(UserId: string): Promise<TCAUserWEB> {
        try {
            const user = await this.TCAUserWEBRepository.findOne({ where: { UserId } });
            return user;
        } catch (error) {
            throw new NotFoundException(`User with login ${UserId} not found`);
        }
    }


   

}
