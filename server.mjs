import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import movies from './server/routes/movies.routes.mjs'
import dbConnection from './server/database/mongodb.connect.mjs'

const app = express()
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
  const address = server.address()
  console.log(`Server port: ${address.port}`)
  dbConnection()
})

server.on('error', (error) => {
  console.log(`Server error: ${error}`)
})

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/movies', movies)
