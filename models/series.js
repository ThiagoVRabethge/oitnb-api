import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Series = sequelize.define('Series', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sinopsis: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  streaming_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  emotion_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'series',
});

export default Series;
