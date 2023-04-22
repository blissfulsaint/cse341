const routes = require('express').Router();
const namesController = require('../controllers');


routes.get('/', namesController.bestFriend);

routes.get('/charlotte', namesController.bestGirlFriend);

module.exports = routes;