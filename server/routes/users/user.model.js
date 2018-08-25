const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;
const crypto = require('crypto');

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    validate: async function() {
      if (this instanceof mongoose.Query) {
        let doc = await this.model.findOne();
        console.log(`User already exists!`);
      }
    },
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  salt: String,
  contacts: {

  }
});

/**
 * Posts
 */
/*
UserSchema.post('save', () => {
  called.push('save-done');
});
*/

/** Virtuals */
UserSchema
  .virtual('token')
  .get(function() {
    return {
      _id: this._id,
      role: this.role
    };
  });

UserSchema
  .virtual('profile')
  .get(function() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      role: this.role,
      email: this.email,
    };
  });

/**
 * Validations
 */

const validatePresenceOf = function(value) {
  return value && value.length;
}

UserSchema.path('email').validate(function(email) {
  return email.length;
}, 'Email cannot be blank');

UserSchema.path('password').validate(function(password) {
  return password.length;
}, 'Password cannot be blank');
/**
 * Pre-save hook for password
 */
UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  if(!validatePresenceOf(this.password)) {
    return next(new Error('Invalid Password'));
  }

  // Make Salt with callback
  this.makeSalt((saltErr, salt) => {
    if (saltErr) {
      return next(saltErr);
    }
    this.salt = salt;
    this.encryptPassword(this.password, (encryptErr, hashedPassword) => {
      if (encryptErr) {
        return next(encryptErr);
      }
      this.password = hashedPassword;
      return next();
    });
  });
});

/**
 * Methods for User Schema and manipulating fields
 */
UserSchema.methods = {
  /**
    * Authenticate - check if the passwords are the same
    *
    * @param {String} password
    * @param {Function} callback
    * @return {Boolean}
    * @api public
    */
  authenticate(password, callback) {
    if (!callback) {
      return this.password === this.encryptPassword(password);
    }

    this.encryptPassword(password, (err, pwdGen) => {
      if (err) {
        return callback(err);
      }

      if (this.password === pwdGen) {
        return callback(null, true);
      } else {
        return callback(null, false);
      }
    });
  },

  /**
   * Make salt
   *
   * @param {Number} [byteSize] - Optional salt byte size, default to 16
   * @param {Function} callback
   * @return {String}
   * @api public
   */
  makeSalt(...args) {
    var defaultByteSize = 16;
    let byteSize;
    let callback;

    if (typeof args[0] === 'function') {
      callback = args[0];
      byteSize = defaultByteSize;
    } else if (typeof args[1] === 'function') {
      callback = args[1];
    } else {
      throw new Error('Missing Callback');
    }

    if (!byteSize) {
      byteSize = defaultByteSize;
    }

    return crypto.randomBytes(byteSize, (err, salt) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, salt.toString('base64'));
      }
    });
  },

  validatePresenceOf(value) {
    return value && value.length;
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @param {Function} callback
   * @return {String}
   * @api public
   */
  encryptPassword(password, callback) {
    if (!password || !this.salt) {
      if (!callback) {
        return null;
      } else {
        return callback('Missing password or salt');
      }
    }

    var defaultIterations = 10000;
    var defaultKeyLength = 64;
    var salt = Buffer.from(this.salt, 'base64');

    if (!callback) {
      return crypto.pbkdf2Sync(password, salt, defaultIterations, defaultKeyLength, 'sha256')
        .toString('base64');
    }

    return crypto.pbkdf2(password, salt, defaultIterations, defaultKeyLength, 'sha256', (err, key) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, key.toString('base64'));
      }
    });
  }
}

module.exports = mongoose.model('User', UserSchema, 'users');
