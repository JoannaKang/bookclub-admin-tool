import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import sequelize from './db/database'

import membersRouter from './router/members'
import reviewsRouter from './router/reviews'
import meetingsRouter from './router/meetings'

const PORT = '8080'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/members', membersRouter)
app.use('/reviews', reviewsRouter)
app.use('/meetings', meetingsRouter)

// @ts-ignore no-unused-vars
/* eslint-disable no-unused-vars */
app.use((_req, res, _next) => res.sendStatus(404))

// @ts-ignore no-unused-vars
app.use((error, _req, res, _next) => {
  console.error(error)
  res.sendStatus(500)
})

// @ts-ignore no-unused-vars
sequelize.sync().then(client =>
  app.listen(PORT, () => {
    console.log(`🚀 Server is running from http://localhost:${PORT}`)
  }),
)
/* eslint-enable no-unused-vars */
