import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Streaming = sequelize.define('Streaming', {
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
  tableName: 'streamings',
});

export default Streaming;
