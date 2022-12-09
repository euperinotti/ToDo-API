import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/postgres";

export interface ToDoInstance extends Model {
    id: number;
    title: string;
    done: boolean;
}

export const ToDo = sequelize.define<ToDoInstance>('ToDo', {
    idtodo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'todos',
    timestamps: false,
})