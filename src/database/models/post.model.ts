import { AllowNull, AutoIncrement, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Comment } from "./comment.model";
import { User } from "./user.model";
import { Like } from "./like.model";


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
    

    @ForeignKey(() => Comment)
    @Column(DataType.INTEGER)
    declare comment_id: number;
    @HasMany(() => Comment, {foreignKey:'fk_comment_id'})
    declare comments?: Comment[];

    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    declare user_id: number;
    @HasMany(() => User, { foreignKey: 'fk_user_id' }) 
    declare user?: User;

    @ForeignKey(() => Like)
    @Column(DataType.INTEGER)
    declare like_id: number
    @HasMany(() => Like, {foreignKey:'fk_like_id'})
    declare likes?: Like[];

    @AllowNull(true)
    @Default(true)
    @Column(DataType.BOOLEAN)
    is_active: boolean;
    

   
    
}

