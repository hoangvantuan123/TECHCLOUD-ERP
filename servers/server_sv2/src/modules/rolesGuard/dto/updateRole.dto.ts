import { IsNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateRoleDto {
    @IsNumber()
    id: number;

    @IsString()
    column: string;

    @IsBoolean()
    value: boolean;
}
