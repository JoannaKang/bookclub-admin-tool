import SQ from 'sequelize'
import sequelize from '../db/database'
import Member from './members'

const { DataTypes } = SQ

const Meeting = sequelize.define('meeting', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  introduction: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  locationReview: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  adminId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

export default Meeting
