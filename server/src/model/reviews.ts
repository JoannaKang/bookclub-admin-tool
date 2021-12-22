import SQ from 'sequelize'
import sequelize from '../db/database'
import Member from './members'
import Meeting from './meetings'

const { DataTypes } = SQ

const Review = sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
})

Review.belongsTo(Member)
Review.belongsTo(Meeting)

export default Review
