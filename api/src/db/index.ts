import { resolve } from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../config'
import { dbLogger } from '../logger'

const { database, username, password, host, port } = config.db
const sequelize = new Sequelize({
  dialect: 'mysql',
  database,
  username,
  password,
  host,
  port: parseInt(port as string),
  logging: msg => dbLogger.info(msg),
  models: [resolve(__dirname, '..', 'model/**/*.ts'), resolve(__dirname, '..', 'model/**/*.js')]
})
const db = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default db
