import SQ from 'sequelize'
import { sequelize } from '../db/database'
const DataTypes = SQ.DataTypes
const Sequelize = SQ.Sequelize;

export const Member = sequelize.define(
  'member', 
  {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
})

