const errors = require('../components/errors');
const path = require('path');
// const users = require('./users');
// const contacts = require('./contacts/index.js');

module.exports = function routes(app, root) {
  app.use('/api/users', require('./users'));
  // app.use('/api/contacts', contacts);

  app.route('/:url(api|auth|component|app|assets)/*').get(errors[404]);

  app.route('/*').get((req, res) => {
    res.sendFile(path.join(root, 'dist/index.html'));
  });
};
