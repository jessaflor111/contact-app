// 'use strict';
// const Contact = require('./contact.model');
// // const jwt = require('jsonwebtoken');
// const config = require('../../config');

// /**
//  * Handles validation errors and returns the error to the user.
//  * @param {Express.Response} res - an Express Response object
//  * @param {number} statusCode - the result status code number
//  */

// function validationError(res, statusCode) {
//   statusCode = statusCode || 422;
//   return function (err) {
//     return res.status(statusCode).json(err);
//   };
// }

// /**
//  * handles error codes and sends the status code to the user.
//  * @param {Express.Response} res - an Express Response object
//  * @param {number} statusCode -  the result status code number
//  */
// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function (err) {
//     return res.status(statusCode).send(err);
//   };
// }

// /**
//  * This function will search for all users in the users collection and show the
//  * details, except for the salt and password
//  * @param {Express.Request} req  - Express request object with possible parameters
//  * @param {Express.Response} res - Express response object.
//  */
// // function allContacts(req, res) {
// //   return Contact.find({})
// //     .exec()
// //     .then(contacts => {
// //       res.status(200).json(contacts);
// //     })
// //     .catch(handleError(res));
// // }

// /**
//  * Find a user by a specific email, we will send a request to this function in a GET request
//  * saving the email in the request.param.id field
//  * @param {Express.Request} req - Express request object contaning the User email we are searching for
//  * @param {Express.Response} res - Express response object
//  * @param {Express.Next} next - function when called goes back to request origin and tries to find another route.
//  */
// // function Search(req, res, next) {
// //   Contact.find({
// //     _id: req.params.id
// //   }, (err, contact) => {
// //     if (err) {
// //       res.send(err);
// //     }
// //     res.json(contact);
// //   }).catch(err => next(err));
// // }

// /**
//  * Create a user and save it to the DB. We will send the user details in a POST request in the body of the post.
//  * @param {Express.Request} req - Express Request object with the Request.body contaning the data
//  * @param {*} res  - Express Response object
//  */
// function create(req, res) {
//   let newContact = new Contact(req.body);
//   return newContact.save(function (err, contact) {
//     if (err) {
//       res.send(err);
//     }
//     // const token = jwt.sign({ _id: user._id }, config.secrets.session, {
//     //   expiresIn: 60 * 60 * 5
//     // });
//     res.json({
//       name: contact.name,
//       _id: contact._id,
//      });

//   });
// }


// // /**
// //  * Create a user and save it to the DB. We will send the user details in a POST request in the body of the post.
// //  * @param {Express.Request} req - Express Request object with the Request.body contaning the data
// //  *   - Express Response object
// //  */
// // function authCallback(req, res) {
// //   res.redirect('/');
// // }



// // function login(req, res) {
// //   // Find user by email
// //   User.findOne({
// //     email: req.body.email
// //   }).then(user => {
// //     // Once we find the user, now let's pass the password from req.body to authenticate
// //     if (!user) {
// //       // Return false, user not even registered, but let's not tell them.
// //       res.send({
// //         message: false
// //       });
// //     }
// //     user.authenticate(req.body.password, function (authErr, authenticated) {
// //       if (authErr) {
// //         res.send(authErr);
// //       }
// //       if (!authenticated) {
// //         // Return false, password invalid
// //         res.send({
// //           message: false
// //         });
// //       } else {
// //         // User is authenticated, let's created a webtoken
// //         const token = jwt.sign({
// //           _id: user._id
// //         }, config.secrets.session, {
// //           expiresIn: 60 * 60 * 5 // set expire time for token
// //         });
// //         // Let's return the created JSON Web token with some fields from the user Model
// //         // we can use these fields to populate in the application who this logged in user is.
// //         res.json({
// //           token: token,
// //           _id: user._id,
// //           name: user.name,
// //           email: user.email,
// //           role: user.role
// //         });
// //       }
// //     });
// //   }).catch(validationError(res));
// // }

// module.exports = { create };
