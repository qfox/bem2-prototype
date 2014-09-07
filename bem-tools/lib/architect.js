'use strict';

var PATH = require('path');
var ARCHITECT = require('architect');

var configPath = PATH.join(__dirname, "..", "config.js");
console.log('loading config ', configPath);
var config = ARCHITECT.loadConfig(configPath);

console.log('before createApp');
var app = ARCHITECT.createApp(config, function (err, app) {
  if (err) throw err;
  console.log("app ready", app);
});
console.log('after createApp');

app.on('plugin', function (plugin) {
  console.log('plugged in ', plugin);
});
app.on('service', function (plugin) {
  console.log('service "' + name + '" registered', service);
});
app.on('ready', function (app) {
  console.log('app ready', app);
});
