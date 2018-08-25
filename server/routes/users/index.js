'use strict';
const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

/**
 * path: /api/user
 * method: GET
 * function: listAllUsers() in the users.controller.js file
 */
router.get('/', controller.allUsers);
/**
 * path: /api/users
 * method: POST
 * function: create() in the users.controller.js file
 */
router.post('/', controller.create);
/**
 * path: /api/users/:id     ->   example: http://localhost:3000/api/users/xavidram@sample.com
 * method: GET
 * function: findUserByEmail() in the users.controller.js file
 */
router.get('/:email', controller.show);


router.post('/login', controller.login);



module.exports = router;
