const express = require('express');
const router = express.Router();

console.log("this is the contacts controller")

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;