import { ApiProperty } from "@nestjs/swagger";
import { PostDto } from "./post.dto";

export class PostIdDto extends PostDto{
    @ApiProperty({ required: true })
    id: number;

    





}