import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Test = sequelize.define('Test', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  notes: {
    type: DataTypes.STRING(1234),
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Test;
