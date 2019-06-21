const https = require('https')
const url = 'https://api.darksky.net/forecast/f60fae1eb1c3a5943c364cbb4b160878/40,-75?units=si&lang=es';

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error);
})
request.end()