import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'atm',
  username: 'root',
  password: 'mykefr',
  host: 'localhost',
  dialect: 'mysql',
  port: 3308
});

export default sequelize;