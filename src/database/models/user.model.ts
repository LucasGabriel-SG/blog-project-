import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique, AllowNull, Default} from 'sequelize-typescript';


@Table({
    tableName: 'users',
    timestamps: false,
})
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    username: string;

    
    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @AllowNull(true)
    @Default(true)
    @Column(DataType.BOOLEAN)
    is_active: boolean;


    
}
