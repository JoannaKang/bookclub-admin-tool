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
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    introduction: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    admin_id: {
      type: DataTypes.STRING(45),
      allowNull:false
    }
  })

Meeting.belongsToMany(Member, {
  through: 'MeetingMemberMappingTable'
})
Member.belongsToMany(Meeting, {
  through: 'MeetingMemberMappingTable', 
})