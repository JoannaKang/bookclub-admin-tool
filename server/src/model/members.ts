import SQ from 'sequelize'
import sequelize from '../db/database'

const { DataTypes } = SQ

const Member = sequelize.define('member', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
})

export default Member
