import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const AssignmentStudent = sequelize.define('AssignmentStudent', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  is_submitted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  material_link: {
    type: DataTypes.TEXT,
  },
  grade: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default AssignmentStudent;
