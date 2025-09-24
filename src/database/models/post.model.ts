import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Comment } from "./comment.model";
import { User } from "./user.model";


@Table({
    tableName: 'posts',
    timestamps: false,
})

export class Post extends Model<Post> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Column(DataType.STRING)
    title: string;

    @Column(DataType.TEXT)
    description: string;
    
    @HasMany(() => Comment, 'post_id')
    declare comments?: Comment[];

    @HasMany(() => User, { foreignKey: 'user_id' }) 
    declare user?: User;

   
    
}