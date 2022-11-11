import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Question = sequelize.define('Question', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  answer: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Question;
