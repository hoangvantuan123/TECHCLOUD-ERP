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
    Get,
    Query,
    BadRequestException
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from 'src/config/security.config';
import { UserAuthService } from '../service/user.service';
import { Response } from 'express';
import { AuthService } from '../service/auths.service';
import { LoginDto, ChangePasswordDto } from '../dto/login.dto';

@Controller('v2/acc')
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



    @Get('check-roles-user-raw')
    async getDataRolesUserRaw(@Query('userId') userId: string): Promise<any[]> {

        return await this.appService.getDataRolesUserRaw(userId);
    }
    
    
    @Post('p2/change-password')
async changePassword(
    @Req() req: Request,
    @Body() changePasswordDto: ChangePasswordDto,
    @Res() res: Response,
) {
    const { employeeId, oldPassword, newPassword } = changePasswordDto;
console.log('employeeId' , employeeId)
console.log('oldPassword' , oldPassword)
console.log('newPassword' , newPassword)

    try {
        // Call the changePassword2 service method
        const result = await this.appService.changePassword2(employeeId, oldPassword, newPassword);

        // Send response without 'status' field
        return res.json({
            success: result.success,
            message: result.success ? result.message : result.error?.message || 'An error occurred',
            code: result.success ? undefined : result.error?.code || 'UNKNOWN_ERROR',
        });

    } catch (error) {
        // Send response without 'status' field and handle internal server error
        return res.json({
            success: false,
            message: 'An unexpected error occurred',
        });
    }
}


}