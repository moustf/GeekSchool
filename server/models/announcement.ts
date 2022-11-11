import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Announcement = sequelize.define(
  'Announcement',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

export default Announcement;
