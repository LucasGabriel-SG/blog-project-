import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";


@Table({tableName: 'likes',
    timestamps: true,
})
export class Like extends Model<Like> {
    
    @PrimaryKey
    @AutoIncrement
    @Column (DataType.INTEGER)
    declare id: number; 

    

}