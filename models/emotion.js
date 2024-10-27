import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Emotion = sequelize.define('Emotion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'emotions',
});

export default Emotion;
