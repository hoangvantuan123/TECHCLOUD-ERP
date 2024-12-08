import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @IsEmail()
    login: string;
    password: string;
}


export class ChangePasswordDto {
    oldPassword: string;
    newPassword: string;
    employeeId: string;
  }