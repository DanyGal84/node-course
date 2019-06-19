/* eslint-disable no-console */
const request = require('request');

const url = 'https://api.darksky.net/forecast/f60fae1eb1c3a5943c364cbb4b160878/19.4327,-99.1332?units=si&lang=es';

request({ url: url, json: true }, (error, response) => {

  if(error) {
    console.log('Unable to connect to weather service!');
  } else if (response.body.error) {
    console.log('Unable to find location');
  } else {
    console.log(response.body.daily.data[0].summary);
    console.log('It is currently ' + response.body.currently.temperature + ' degrees out');
    console.log('There is ' + response.body.currently.precipProbability + '% chance of rain')
  }
})

// Geocoding
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mexico%20City.json?access_token=pk.eyJ1IjoiZGFuaWVsZ2FsdmFuc29sYW5vIiwiYSI6ImNqeDNwamk5cjAwcnEzem5xM3UyMHh3OGYifQ.mRt_TSM5w5NTlREingnYtQ&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {

  if(error) {
    console.log('Unable to connect to the Geocode service!');
  } else if (response.body.message) {
    console.log('Location not found');
  } else {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
  
    console.log('The longitude is: ' + longitude + ' The latitude is: ' + latitude);
  }
})