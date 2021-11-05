"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = require("../db/database");
const DataTypes = sequelize_1.default.DataTypes;
exports.Member = database_1.sequelize.define('member', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
});
