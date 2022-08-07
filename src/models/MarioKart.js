const mongoose = require('mongoose');

const MarioKartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  typeCar:{
    type: String,
    required: true,
  },
  photo:{
    type: String,
    required: true,
  },
});

const MarioKart = mongoose.model('mariokart', MarioKartSchema);

module.exports = MarioKart;
