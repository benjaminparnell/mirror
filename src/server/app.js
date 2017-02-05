require('dotenv').config()

const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const path = require('path')
const glob = require('glob')

const app = express()
const port = process.env.PORT || 8990

app.use(compression())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', '..', 'public')))

const globPath = path.join(__dirname, 'components', '**', 'init.js')
glob(globPath, (err, files) => {
  if (err) throw err

  files.forEach((file) => require(file)(app))

  app.listen(port, () => {
    console.log(`mirror listening on ${port}`)
  })
})

