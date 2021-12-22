import dotenv from 'dotenv'

dotenv.config({ path:'../.env' })

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER as string,
    database: process.env.DB_DATABASE as string,
    password: process.env.DB_PASSWORD
  }
}

export default config