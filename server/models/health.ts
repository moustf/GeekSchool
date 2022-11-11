import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Health = sequelize.define('Health', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dental: {
    type: DataTypes.TEXT,
  },
  vision: {
    type: DataTypes.TEXT,
  },
  blood_pressure: {
    type: DataTypes.TEXT,
  },
  cancer: {
    type: DataTypes.TEXT,
  },
  diabetes: {
    type: DataTypes.TEXT,
  },
  chronic: {
    type: DataTypes.TEXT,
  },
  other: {
    type: DataTypes.TEXT,
  },
});

export default Health;
