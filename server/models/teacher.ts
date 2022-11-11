import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Teacher = sequelize.define('Teacher', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

export default Teacher;
