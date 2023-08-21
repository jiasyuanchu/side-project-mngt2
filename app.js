const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

// app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html')
  res.sendFile(indexPath)
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

module.exports = app
