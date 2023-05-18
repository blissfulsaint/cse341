const routes = require('express').Router();
const namesController = require('../controllers');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


routes.get('/', namesController.bestFriend);

routes.get('/charlotte', namesController.bestGirlFriend);

routes.use('/contacts', require('./contacts'))

module.exports = routes;

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));