const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Schema = mongoose.Schema;


const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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
  },
  company: {
    type: String
  },
  dob: {
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }


});



module.exports = mongoose.model('Contact', ContactSchema);
