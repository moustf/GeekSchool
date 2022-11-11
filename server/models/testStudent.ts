import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const TestStudent = sequelize.define('TestStudent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  grade: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default TestStudent;
