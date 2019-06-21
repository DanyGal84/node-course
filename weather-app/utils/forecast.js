const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/f60fae1eb1c3a5943c364cbb4b160878/'+ latitude +','+ longitude + '?units=si&lang=es';
  request({ url: url, json: true}, (error, response) => {
    if(error) {
      callback('Unable to connect to forecast server!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location!', undefined);
    } else {
      callback(undefined, response.body.daily.data[0].summary + ' Actualmente la temperatura es de ' + response.body.currently.temperature + ' grados centigrados. Hay un ' + response.body.currently.precipProbability + '% de posibilidad de lluvia.');
    }
  });
}

module.exports = forecast;