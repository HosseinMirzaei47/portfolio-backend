const express = require('express');
const projects = require('../routes/projects');
const info = require('../routes/info');
const auth = require('../routes/auth');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/projects', projects);
    app.use('/api/info', info);
    app.use('/api/auth', auth);
    app.use(error);
}