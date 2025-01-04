const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    recipient: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, required: true },
    sentAt: { type: Date, required: true },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const DeliveryP = mongoose.model('DeliveryP', deliverySchema);
module.exports = DeliveryP;
