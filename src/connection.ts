import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'cajeroatm',
  username: 'root',
  password: 'mykefr',
  host: 'localhost',
  dialect: 'mysql',
  port: 3308
});

export default sequelize;