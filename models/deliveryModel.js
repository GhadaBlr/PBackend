const mongoose = require('mongoose');

// Define the schema for the Delivery collection
const deliverySchema = new mongoose.Schema({
  name: { type: String, required: true }, // Name of the address (e.g., Home, Work)
  X: { type: Number, required: true }, // Latitude
  Y: { type: Number, required: true }, // Longitude
  createdAt: { type: Date, default: Date.now }, // Timestamp for record creation
});

// Create and export the model for the Delivery collection
module.exports = mongoose.model('Delivery', deliverySchema);
