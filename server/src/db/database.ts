import mysql from 'mysql2'
import SQ from 'sequelize'
import {config} from '../../../config'

const { host, user, database, password } = config.db

export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: 'mysql'
})