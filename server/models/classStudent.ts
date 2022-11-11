import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const ClassStudent = sequelize.define('ClassStudent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default ClassStudent;
