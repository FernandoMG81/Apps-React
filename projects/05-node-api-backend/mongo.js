const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

// Conexion a mongodb
mongoose.set('strictQuery', true)
mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).then(() => {

  }).catch(err => {
    console.error(err)
  })
