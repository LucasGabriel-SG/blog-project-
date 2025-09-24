import { AutoIncrement, BelongsTo, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";



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

    @Column(DataType.INTEGER)
    declare user_id: number;

    @BelongsTo(() => User, 'user_id') 
    declare user?: User;
}