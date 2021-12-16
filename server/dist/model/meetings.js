'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.Meeting = void 0
const sequelize_1 = __importDefault(require('sequelize'))
const database_1 = require('../db/database')
const members_1 = require('./members')
const DataTypes = sequelize_1.default.DataTypes
const Sequelize = sequelize_1.default.Sequelize
exports.Meeting = database_1.sequelize.define('meeting', {
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
})
exports.Meeting.belongsTo(members_1.Member)
