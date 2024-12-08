import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateResUsersDto {
    @IsString()
    UserId: string;
    @IsString()
    UserName: string;
    @IsString()
    CompanySeq: string;
    @IsString()
    CustSeq: string;
    @IsString()
    DeptSeq: string;
    @IsString()
    UserType: string;

}
