import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Schedule = sequelize.define('Schedule', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  day: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

export default Schedule;
