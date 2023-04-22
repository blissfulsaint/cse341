const routes = require('express').Router();
const namesController = require('../controllers');


routes.get('/', namesController.greatGirl);

routes.get('/guapo', namesController.greatBoy);

module.exports = routes;