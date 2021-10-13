import SQ from 'sequelize'
import { sequelize } from '../db/database'
const DataTypes = SQ.DataTypes

export const Member = sequelize.define(
  'member', 
  {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  attendance: {
    type: DataTypes.DATE,
    allowNull: false
  }
})