const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model('Password', schema);

module.exports = Model;
