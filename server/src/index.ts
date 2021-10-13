import express from 'express'
import 'express-async-errors';
import cors from 'cors';
import { sequelize } from './db/database'
import { Member } from './model/members'
const PORT = '8080'

const app = express()
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  console.log('get')
})

const Members = Member

// @ts-ignore
app.use((req, res, next) => {
  res.sendStatus(404);
});
// @ts-ignore
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  app.listen(PORT,  () => { 
    console.log(`🚀 Server is running from http://localhost:${PORT}`)
  })
})
