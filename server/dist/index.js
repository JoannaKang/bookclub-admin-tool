'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
require('express-async-errors')
const cors_1 = __importDefault(require('cors'))
const database_1 = require('./db/database')
const members_1 = __importDefault(require('./router/members'))
const reviews_1 = __importDefault(require('./router/reviews'))
const meetings_1 = __importDefault(require('./router/meetings'))
const PORT = '8080'
const app = (0, express_1.default)()
app.use(express_1.default.json())
app.use((0, cors_1.default)())
app.use('/members', members_1.default)
app.use('/reviews', reviews_1.default)
app.use('/meetings', meetings_1.default)
// @ts-ignore
app.use((req, res, next) => {
  res.sendStatus(404)
})
// @ts-ignore
app.use((error, req, res, next) => {
  console.error(error)
  res.sendStatus(500)
})
database_1.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running from http://localhost:${PORT}`)
  })
})
