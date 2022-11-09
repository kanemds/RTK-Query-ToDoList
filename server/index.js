const express = require('express')
const router = express.Router()
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const routes = require('./api/routes')


const PORT = 3001
const DB = process.env.MONGODB_URL

mongoose.connect(DB)
  .then(() => {
    console.log('connected to DB')
    app.listen(PORT, () => {
      console.log(`connted to server: ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error)
  })




app.get('/', (req, res) => {
  res.send('hey')
})

app.use(express.json())
app.use('/', routes)