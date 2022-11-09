const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

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