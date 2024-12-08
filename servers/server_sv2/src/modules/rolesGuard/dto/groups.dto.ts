import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateResGroupsDto {
    @IsString()
    Name: string;
    @IsString()
    Comment: string;

}
