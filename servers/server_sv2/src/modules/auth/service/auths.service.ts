import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
    BadRequestException
    , InternalServerErrorException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { ERPUserWEB } from '../entities/auths.entity';
import { UserAuthService } from './user.service';
import { jwtConstants } from 'src/config/security.config';
import * as crypto from 'crypto';
import { LoginDto } from '../dto/login.dto';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/common/database/mssql/database.service';

interface RoleMenuData {
    menu: any[];
    rootMenu: any[];
}

@Injectable()
export class AuthService {
    constructor(
        private readonly userAuthService: UserAuthService,
        private readonly databaseService: DatabaseService,
        @InjectRepository(ERPUserWEB)
        private readonly userWEBRepository: Repository<ERPUserWEB>) { }
    private async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return bcrypt.hash(password, saltRounds);
    }
    private readonly ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'default_secret';

    /* MÃ HÓA PASS */
    private async encryptPassword(plainText: string): Promise<string> {
        const IV_LENGTH = 16;
        const key = crypto.createHash('sha256').update(this.ENCRYPTION_KEY).digest();
        const iv = crypto.randomBytes(IV_LENGTH);
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let encrypted = cipher.update(plainText, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return iv.toString('hex') + encrypted;
    }


    async getDataRolesUserRaw(UserId: string): Promise<any[]> {
        try {
            const query = `
              WITH GroupIDs AS (
    SELECT DISTINCT GroupId 
    FROM "_ERPRolesUsers_WEB" 
    WHERE UserId = N'${UserId}'
)
SELECT 
    r.*,
    m.[Key] AS MenuKey, 
    m.Label AS MenuLabel,  
    m.Link AS MenuLink,
    m.Type AS MenuType,
    m.MenuRootId AS MenuRootId,
    m.MenuSubRootId AS MenuSubRootId,
    rm.[Key] AS RootMenuKey,  
    rm.Label AS RootMenuLabel,  
    rm.Icon AS RootMenuIcon, 
    rm.Link AS RootMenuLink, 
    rm.Utilities AS RootMenuUtilities  
FROM "_ERPRolesUsers_WEB" r
LEFT JOIN "_ERPMenus_WEB" m 
    ON r.MenuId = m.Id AND r.Type = 'menu'
LEFT JOIN "_ERPRootMenus_WEB" rm 
    ON r.RootMenuId = rm.Id AND r.Type = 'rootmenu'
WHERE r.GroupId IN (SELECT GroupId FROM GroupIDs)
AND r.Type IN ('rootmenu', 'menu');

            `;

            const datas = await this.databaseService.executeQuery(query);
            if (datas.length === 0) {
                return [];
            }

            const datamergePermissions = this.mergePermissions(datas);

            return [
                { menu: [...datamergePermissions.menu] },
                { rootMenu: [...datamergePermissions.rootMenu] }
            ];
        } catch (error) {
            throw new InternalServerErrorException('Error fetching datas from database');
        }
    }



    private mergePermissions(data: any[]): { menu: any[], rootMenu: any[] } {
        const mergedData = data.reduce((acc, item) => {
            const { Id, View, Edit, Create, Delete, MenuId, GroupId, UserId, RootMenuId, Type, Name
                , MenuKey, MenuLabel, MenuLink, MenuType, RootMenuKey, RootMenuLabel, RootMenuIcon, RootMenuLink,
                RootMenuUtilities, MenuSubRootId, MenuRootId

            } = item;

            if (Type === "menu") {
                if (!acc.menu[MenuId]) {
                    acc.menu[MenuId] = {
                        Id: Id,
                        View: View,
                        Edit: Edit,
                        Create: Create,
                        Delete: Delete,
                        GroupId: GroupId,
                        UserId: UserId,
                        MenuId: MenuId,
                        Type: Type,
                        Name: Name,
                        MenuKey: MenuKey,
                        MenuLabel: MenuLabel,
                        MenuLink: MenuLink,
                        MenuType: MenuType,
                        MenuRootId: MenuRootId,
                        MenuSubRootId: MenuSubRootId

                    };
                } else {
                    acc.menu[MenuId].View = acc.menu[MenuId].View && View;
                    acc.menu[MenuId].Create = acc.menu[MenuId].Create && Create;
                    acc.menu[MenuId].Edit = acc.menu[MenuId].Edit && Edit;
                    acc.menu[MenuId].Delete = acc.menu[MenuId].Delete && Delete;
                }
            } else if (Type === "rootmenu") {
                if (!acc.rootMenu[RootMenuId]) {
                    acc.rootMenu[RootMenuId] = {
                        Id: Id,
                        View: View,
                        Edit: Edit,
                        Create: Create,
                        Delete: Delete,
                        GroupId: GroupId,
                        UserId: UserId,
                        RootMenuId: RootMenuId,
                        Type: Type,
                        Name: Name,
                        RootMenuKey: RootMenuKey,
                        RootMenuLabel: RootMenuLabel,
                        RootMenuIcon: RootMenuIcon,
                        RootMenuLink: RootMenuLink,
                        RootMenuUtilities: RootMenuUtilities
                    };
                } else {
                    acc.rootMenu[RootMenuId].View = acc.rootMenu[RootMenuId].View && View;
                    acc.rootMenu[RootMenuId].Create = acc.rootMenu[RootMenuId].Create && Create;
                    acc.rootMenu[RootMenuId].Edit = acc.rootMenu[RootMenuId].Edit && Edit;
                    acc.rootMenu[RootMenuId].Delete = acc.rootMenu[RootMenuId].Delete && Delete;
                }
            }

            return acc;
        }, { menu: {}, rootMenu: {} });

        return {
            menu: Object.values(mergedData.menu),
            rootMenu: Object.values(mergedData.rootMenu),
        };
    }

    async loginUserB(
        loginData: LoginDto,
    ): Promise<{
        success: boolean;
        data?: { user: Partial<ERPUserWEB>; token: string; tokenRolesUserMenu: string };
        error?: { message: string; code: string };
    }> {
        const { login, password } = loginData;

        try {
            const user = await this.databaseService.findAuthByEmpID(login);

            if (!user) {
                return {
                    success: false,
                    error: {
                        message: `User with login ${login} not found`,
                        code: 'USER_NOT_FOUND',
                    },
                };
            }
            const isPasswordValid = await bcrypt.compare(password, user.Password2);

            if (!isPasswordValid) {
                return {
                    success: false,
                    error: {
                        message: 'Invalid credentials. Please check your login and password.',
                        code: 'INVALID_CREDENTIALS',
                    },
                };
            }
            if (user.StatusAcc) {
                return {
                    success: false,
                    error: {
                        message: 'Your account has been locked. Please contact support for further details.',
                        code: 'ACCOUNT_LOCKED',
                    },
                };
            }
            if (!user.CheckPass1) {
                return {
                    success: false,
                    error: {
                        message: 'Account is not fully activated. Please change your password to activate your account.',
                        code: 'ACCOUNT_NOT_ACTIVATED',
                    },
                };
            }

            const token = jwt.sign(
                {
                    UserId: user.UserId,
                    Login: user.UserName,
                    UserSeq: user.UserSeq,
                    EmpSeq: user.EmpSeq,
                    Remark: user.Remark,
                    CompanySeq: user.CompanySeq
                },
                jwtConstants.secret,
                { expiresIn: '24h' }
            );

            const rolesUserMenu = await this.getDataRolesUserRaw(login);
            const tokenRolesUserMenu = jwt.sign(
                {
                    data: rolesUserMenu

                },
                jwtConstants.secret,
                { expiresIn: '24h' }
            );


            const userResponse: Partial<any> = {
                UserId: user.UserId,
                UserName: user.UserName,
                CompanySeq: user.CompanySeq,
                CustSeq: user.CustSeq,
                DeptSeq: user.DeptSeq,
                UserType: user.UserType,
                EmpSeq: user.EmpSeq,
                ProjectType: "B"
            };
            return {
                success: true,
                data: {
                    user: userResponse,
                    token,
                    tokenRolesUserMenu
                },
            };
        } catch (error) {
            return {
                success: false,
                error: {
                    message: error.message || 'An unexpected error occurred',
                    code: error instanceof NotFoundException ? 'USER_NOT_FOUND' : 'UNKNOWN_ERROR',
                },
            };
        }
    }

    async updatePasswordForUsers(userIds: (string | number)[]): Promise<{
        success: boolean;
        message: string;
    }> {
        try {
            const updatePromises = userIds.map(async (userId) => {
                const userIdStr = userId.toString();
                const newPassword = `@${userIdStr}`;
                const hashedPassword = await this.hashPassword(newPassword);

                await this.userWEBRepository.update(
                    { UserId: userIdStr },
                    { Password2: hashedPassword },
                );
            });

            await Promise.all(updatePromises);
            return {
                success: true,
                message: 'Passwords updated successfully.',
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || 'An error occurred while updating passwords.',
            };
        }
    }


    async changePassword2(
        employeeId: string,
        oldPassword: string,
        newPassword: string,
    ): Promise<{ success: boolean; message: string; error?: { message: string; code: string } }> {
        try {
            const user = await this.databaseService.findAuthByEmpID(employeeId);

            if (!user) {
                return {
                    success: false,
                    message: 'An error occurred',
                    error: {
                        message: 'User not found',
                        code: 'USER_NOT_FOUND',
                    },
                };
            }

            const isOldPasswordValid = await bcrypt.compare(oldPassword, user.Password2);

            if (!isOldPasswordValid) {
                return {
                    success: false,
                    message: 'An error occurred',
                    error: {
                        message: 'Old password is incorrect',
                        code: 'OLD_PASS_INCORRECT',
                    },
                };
            }

            const hashedNewPassword = await this.hashPassword(newPassword);
            user.Password2 = hashedNewPassword;

            await this.userWEBRepository.update(
                { UserId: employeeId },
                {
                    Password2: hashedNewPassword,
                    Active: true,
                    CheckPass1: true
                }
            );

            return {
                success: true,
                message: 'Password changed successfully',
            };
        } catch (error) {

            return {
                success: false,
                message: 'An unexpected error occurred',
                error: {
                    message: error.message || 'Internal server error',
                    code: 'INTERNAL_ERROR',
                },
            };
        }
    }







}
