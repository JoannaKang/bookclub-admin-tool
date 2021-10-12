import mysql from 'mysql2'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'bookclub',
  password: ''
})

export const db = pool.promise()