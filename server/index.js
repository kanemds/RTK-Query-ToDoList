const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const path = require('path')

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



app.use(cookieParser())
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/', routes)
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.sendFile({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})