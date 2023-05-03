const routes = require('express').Router();
const namesController = require('../controllers');


routes.get('/', namesController.bestFriend);

routes.get('/charlotte', namesController.bestGirlFriend);

routes.use('/contacts', require('./contacts'))

module.exports = routes;