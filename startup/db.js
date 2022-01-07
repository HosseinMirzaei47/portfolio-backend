const winston = require('winston');
const mongoose = require('mongoose');
const uri = require('../config/keys').MongoURI

module.exports = function () {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => winston.info(`Connected to ${uri}...`));
}