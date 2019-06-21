const path = require('path')

const express = require('express')

const app = express()
const port = 3000

const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Daniel Galván'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Daniel Galván'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is sunny',
    location: 'Mexico City'
  })
})

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}!`)
})