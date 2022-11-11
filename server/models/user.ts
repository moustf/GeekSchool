import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'https://us.123rf.com/450wm/anwarsikumbang/anwarsikumbang1602/anwarsikumbang160200119/52015141-geek-nerd-guy-cartoon-character-theme-vector-illustration.jpg?ver=6',
  },
  location: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.ENUM('student', 'parent', 'teacher'),
    allowNull: false,
  },

});

export default User;
