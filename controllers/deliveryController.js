const Delivery = require('../models/deliveryModel');

// GET all deliveries
const getAllDeliveries = async (req, res, next) => {
    try {
        const deliveries = await Delivery.find();
        res.json(deliveries);
    } catch (err) {
        next(err);
    }
};

// GET single delivery by ID
const getDeliveryById = async (req, res, next) => {
    try {
        const delivery = await Delivery.findById(req.params.id);
        if (!delivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }
        res.json(delivery);
    } catch (err) {
        next(err);
    }
};

// POST create a new delivery
const createDelivery = async (req, res, next) => {
    try {
        const { name, X, Y } = req.body;
        const newDelivery = new Delivery({
            name,
            X,
            Y
        });
        const savedDelivery = await newDelivery.save();
        res.status(201).json(savedDelivery);
    } catch (err) {
        next(err);
    }
};

// PUT update a delivery by ID
const updateDelivery = async (req, res, next) => {
    try {
        const { name, X, Y } = req.body;
        const updatedDelivery = await Delivery.findByIdAndUpdate(req.params.id, { name, X, Y }, {
            new: true, runValidators: true
        });
        if (!updatedDelivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }
        res.json(updatedDelivery);
    } catch (err) {
        next(err);
    }
};

// DELETE a delivery by ID
const deleteDelivery = async (req, res, next) => {
    try {
        const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
        if (!deletedDelivery) {
            return res.status(404).json({ message: 'Delivery not found' });
        }
        res.json({ message: 'Delivery deleted' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};
