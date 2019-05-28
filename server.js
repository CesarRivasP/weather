const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

app.use(cors());

const getData = async (url) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Authorization',
        'X-API-KEY': 'Origin',
        'X-Requested-With': 'Content-Type',
        'Accept': 'Access-Control-Allow-Request-Method',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    })

    const json = await res.json();

    return json;
  }
  catch (error) {
   console.log(error);
 }
}

app.get('/getWeather', async(request, response) => {
  let city = request.query.city;
  let country = request.query.country;

  const appId = '512ffe00c10c48f78d1c866cb80a4f7d';

  const url = `https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  const weather = await getData(url)

  response.send(weather)
})

const server = app.listen(3002, function(){
  console.log(new Date().toISOString() + ": server started on port 3002");
})
