import { ApiProperty } from "@nestjs/swagger";
import {  IsOptional} from "class-validator";
import { CredentialsDto } from "./credential.user.dto";


export class CreateUserDto extends CredentialsDto {
@IsOptional()
@ApiProperty({ required: false })
is_active?: boolean;

}

