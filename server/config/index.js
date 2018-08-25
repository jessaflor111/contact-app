const path = require('path');
const _ = require('lodash');

/**
 * Configuration settings for DB and application
 */
const all = {
  secrets: {
    session: 'sample-secret'
  },
  mongo: {
    connection: {
      useMongoClient: true,
      uri: 'mongodb://adminuser:test123@ds123532.mlab.com:23532/sample'
    },
    options: {
      db: {
        safe: true
      }
    },
    seed: false
  },
  userRoles: ['guest', 'user', 'admin'],
};

module.exports = _.merge(
  all
);
