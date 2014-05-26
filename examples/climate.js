// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This basic climate example logs a stream
of temperature and humidity to the console.
*********************************************/

var tessel = require('tessel');
var climate = require('../').use(tessel.port['A']); // Replace '../' with 'climate-si7005' in your own code

// Wait for the climate module to connect
climate.on('ready', function () {
  climate.on('temperature', function (temp) {
    console.log(temp.toFixed(2), 'degrees F');
  });
  climate.on('humidity', function (humidity) {
    console.log(humidity.toFixed(2), '%RH');
  });
});

climate.on('error', function(err) {
  console.log('error connecting module', err);
});

setInterval(function(){}, 20000);
