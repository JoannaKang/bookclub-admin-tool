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
})

Meeting.belongsToMany(Member, {
  through: 'meeting_member_mapping',
})
Member.belongsToMany(Meeting, {
  through: 'meeting_member_mapping',
})

export default Meeting
