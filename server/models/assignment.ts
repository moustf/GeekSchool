import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Assignment = sequelize.define(
  'Assignment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
);

export default Assignment;
