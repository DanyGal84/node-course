const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGFuaWVsZ2FsdmFuc29sYW5vIiwiYSI6ImNqeDNwamk5cjAwcnEzem5xM3UyMHh3OGYifQ.mRt_TSM5w5NTlREingnYtQ&limit=1';

  request( { url: url, json: true}, (error, response) => {
    if(error) {
      callback('Unable to connect to location services!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search!', undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  })
}

module.exports = geocode;