import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Parent = sequelize.define('Parent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Parent;
