const Notification = require('../models/notificationModel');

// GET all notifications
const getAllNotifications = async (req, res, next) => {
    try {
        const notifications = await Notification.find();
        res.json(notifications);
    } catch (err) {
        next(err);
    }
};

// GET single notification by ID
const getNotificationById = async (req, res, next) => {
    try {
        const notification = await Notification.findById(req.params.id);
        if (!notification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json(notification);
    } catch (err) {
        next(err);
    }
};

// POST create a new notification
const createNotification = async (req, res, next) => {
    try {
        const newNotification = new Notification(req.body);
        const savedNotification = await newNotification.save();
        res.status(201).json(savedNotification);
    } catch (err) {
        next(err);
    }
};

// PUT update a notification by ID
const updateNotification = async (req, res, next) => {
    try {
        const updatedNotification = await Notification.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });
        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json(updatedNotification);
    } catch (err) {
        next(err);
    }
};

// DELETE a notification by ID
const deleteNotification = async (req, res, next) => {
    try {
        const deletedNotification = await Notification.findByIdAndDelete(req.params.id);
        if (!deletedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }
        res.json({ message: 'Notification deleted' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllNotifications,
    getNotificationById,
    createNotification,
    updateNotification,
    deleteNotification
};
