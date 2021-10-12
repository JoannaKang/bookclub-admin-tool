import express from 'express'
// @ts-ignore
import { db } from './db/database'

const app = express()

const PORT = '8080'

app.get('/', (req, res) => {
  console.log('get')
})

db.getConnection().then((connection:any) => { console.log(connection)})

app.listen(PORT,  () => { 
  console.log(`🚀 Server is running from http://localhost:${PORT}`)
})