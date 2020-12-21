'use strict';

const SwaggerExpress = require('swagger-express-mw');
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');

const configs = require('./config/config');

const app = express();

// enable files upload
app.use(fileUpload());

//add other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app; // for testing

const port = configs.port;

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  // install middleware
  swaggerExpress.register(app);
  app.listen(port);
  console.log('server is started');
});
