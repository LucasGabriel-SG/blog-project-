import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";
import { Post } from "./post.model";
import { Like } from "./like.model";



@Table({
    tableName: 'comments',
    timestamps: false,
})
export class Comment extends Model<Comment> {
    @PrimaryKey
    @AutoIncrement
    @Column (DataType.INTEGER)
    declare id: number;

    @Column(DataType.STRING)
    content: string;

    @Column(DataType.STRING)
    text: string;

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    declare user_id: number;
    @HasMany(() => User, {foreignKey:'fk_user_id'})
    declare user?: User[];

    @ForeignKey(() => Post)
    @Column(DataType.INTEGER)
    declare post_id: number;
    @BelongsTo(() => Post, {foreignKey:'fk_post_id'})
    declare post?: Post;



    @ForeignKey(() => Like)
    @Column(DataType.INTEGER)
    declare like_id: number;
    @HasMany(() => Like, {foreignKey:'fk_like_id'})
    declare like?: Like[];


      @Column(DataType.BOOLEAN)
        is_active: boolean;
    




}



