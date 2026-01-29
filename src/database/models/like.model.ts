import { AutoIncrement, Column, DataType, ForeignKey, HasMany, Model, PrimaryKey, Table,  } from "sequelize-typescript";
import { User } from "./user.model";
import { Comment } from "./comment.model";
import { Post } from "./post.model";


@Table({tableName: 'likes',
    timestamps: true,
})
export class Like extends Model<Like> {
    
    @PrimaryKey
    @AutoIncrement
    @Column (DataType.INTEGER)
    declare id: number; 

    @Column(DataType.BOOLEAN)
    isLike: boolean;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    declare user_id: number;
    @HasMany(() => User, {foreignKey:'fk_user_id'})
    declare user?: User[];


    @ForeignKey(() => Comment)
    @Column(DataType.INTEGER)
    declare comment_id: number;
    @HasMany(() => Comment, {foreignKey:'fk_comment_id'})
    declare comment?: Comment[];

    @ForeignKey(() => Post)
    @Column(DataType.INTEGER)
    declare post_id: number;
    @HasMany(() => Post, {foreignKey:'fk_post_id'})
    declare post?: Post[];



     @Column(DataType.BOOLEAN)
       is_active: boolean;

    

}

