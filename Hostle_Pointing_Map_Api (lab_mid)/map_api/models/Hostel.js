const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  description: String
}, { timestamps: true });

module.exports = mongoose.model("Hostel", hostelSchema);