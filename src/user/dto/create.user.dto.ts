import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";


export class CreateUserDto {
@ApiProperty({ required: true })
@IsString()
username: string;


@ApiProperty({ required: true })
@IsString()
password: string;


@ApiProperty({ required: false })
is_active?: boolean;

}

