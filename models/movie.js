import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Movie = sequelize.define('Movie', {
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
  tableName: 'movies',
});

export default Movie;
