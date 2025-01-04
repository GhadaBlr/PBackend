const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    recipient: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, required: true },
    sentAt: { type: Date, required: true },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notif', notificationSchema);
module.exports = Notification;
