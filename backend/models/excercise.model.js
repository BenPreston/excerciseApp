const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Excercise', ExcerciseSchema);
