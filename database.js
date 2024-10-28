import Sequelize from 'sequelize';
import "dotenv/config"

const sequelize = new Sequelize({
  dialect: process.env.DIALECT,
  storage: process.env.STORAGE,
});

export default sequelize;
