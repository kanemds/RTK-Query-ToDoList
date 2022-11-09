const express = require('express')
const app = express()

const PORT = 3001

app.listen(PORT, () => {
  console.log(`connted to server: ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('hey')
})