const dbConfig = {
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    idle: 3000
  },
  username: process.env.DB_USERNAME,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
}

module.exports = dbConfig

