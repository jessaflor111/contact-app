// 'use strict';
const express = require('express');
const mongoose = require('mongoose');
// const controller = require('./contact.controller');
const router = express.Router();

// grabbing the Contact Schema
const Contact = require("./contact.model");

/**
 * path: /api/user
 * method: GET
 * function: Get all contacts
 */
router.get('/', (req, res) => {
  Contact.find().then(contacts => res.json(contacts));
});
/**
 * path: /api/users
 * method: POST
 * function: create new contact
 */
router.post('/post-create', (req, res) => {
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone
  })

  newContact.save().then(contact => res.json(contact));

});
/**
 * path: /api/contacts/:id     ->   example: http://localhost:3000/api/contacts/xavidram@sample.com
 * method: GET
 * function: findUserByEmail() in the users.controller.js file
 */
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id).then(contact => { res.json(contact) })
});

/**
 * path: /api/contacts/:id     ->   example: http://localhost:3000/api/users/xavidram@sample.com
 * method: GET
 * function: findUserByEmail() in the users.controller.js file
 */
// router.delete('/:id', controller.delete);






module.exports = router;
