import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Report = sequelize.define('Report', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING(1234),
  },
});

export default Report;
