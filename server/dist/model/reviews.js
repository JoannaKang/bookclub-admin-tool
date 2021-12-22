'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Review = void 0
const sequelize_1 = __importDefault(require('sequelize'))
const database_1 = require('../db/database')
const members_1 = require('./members')
const DataTypes = sequelize_1.default.DataTypes
const Sequelize = sequelize_1.default.Sequelize
exports.Review = database_1.sequelize.define('review', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
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
exports.Review.belongsTo(members_1.Member)
