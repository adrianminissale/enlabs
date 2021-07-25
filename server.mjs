import express from 'express'
import 'dotenv/config'

import movies from './src/routes/movies.routes.mjs'
import dbConnection from './src/database/mongodb.connect.mjs'

const app = express()
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
  const address = server.address()
  console.log(`Servidor levantado en el puerto ${address.port}`)
  dbConnection()
})

server.on('error', (error) => {
  console.log(`Error en servidor ${error}`)
})

app.use(express.json())
app.use(express.urlencoded())

app.use('/movies', movies)
