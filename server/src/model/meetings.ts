import SQ from 'sequelize'
import { sequelize } from '../db/database'
import { Member } from './members'
const DataTypes = SQ.DataTypes
const Sequelize = SQ.Sequelize;

export const Meeting = sequelize.define(
  'meeting', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    introduction: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    locationReview: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  })

Meeting.belongsToMany(Member, {
  through: 'MeetingMemberMappingTable'
})
Member.belongsToMany(Meeting, {
  through: 'MeetingMemberMappingTable', 
})