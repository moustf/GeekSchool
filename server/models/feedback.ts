import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Feedback = sequelize.define('Feedback', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Feedback;
