import {
    Controller,
    Post,
    Body,
    Req,
    Res,
    HttpStatus,
    UnauthorizedException,
    Put,
    Patch,
    BadRequestException
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/config/security.config';
import { UserAuthService } from '../service/user.service';
import { AuthService } from '../service/auths.service';
import { LoginDto } from '../dto/login.dto';

@Controller('acc')
export class AuthController {
    constructor(
        private readonly appService: AuthService,
        private readonly userAuthService: UserAuthService,
    ) { }

    @Post('admin/update-passwords-2')
    async updatePasswords(@Body('userIds') userIds: (string | number)[]) {
        if (!Array.isArray(userIds) || userIds.length === 0) {
            throw new BadRequestException('userIds phải là một mảng không rỗng');
        }

        const result = await this.appService.updatePasswordForUsers(userIds);

        if (result.success) {
            return { message: result.message };
        } else {
            throw new BadRequestException(result.message);
        }
    }

    /* DỰ ÁN ERP WAREHOUSE */
    /* LOGIN PASS2 */
    @Post('p2/login')
    async loginUserB(@Body() loginDto: LoginDto) {
        return this.appService.loginUserB(loginDto);
    }
}