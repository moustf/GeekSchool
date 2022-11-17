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
    defaultValue: 'لا يوجد',
  },
  vision: {
    type: DataTypes.TEXT,
    defaultValue: 'لا يوجد',
  },
  blood_pressure: {
    type: DataTypes.TEXT,
    defaultValue: 'لا يوجد',
  },
  cancer: {
    type: DataTypes.TEXT,
    defaultValue: 'لا يوجد',
  },
  diabetes: {
    type: DataTypes.TEXT,
    defaultValue: 'لا يوجد',
  },
  chronic: {
    type: DataTypes.TEXT,
    defaultValue: 'لا يوجد',
  },
  other: {
    type: DataTypes.TEXT,
    defaultValue: 'لا يوجد',
  },
});

export default Health;
