const express = require('express');
const mongoose = require('mongoose');
const notificationRoutes = require('./routes/notificationRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const errorHandler = require('./utils/errorHandler');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection for Notification DB
mongoose.connect('mongodb://localhost:28000/Notification', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Notification database');
})
  .catch(err => console.error('Error connecting to Notification MongoDB:', err));

// MongoDB Connection for Delivery DB
mongoose.connect('mongodb://localhost:28000/Delivery', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Delivery database');
})
  .catch(err => console.error('Error connecting to Delivery MongoDB:', err));

// Routes
app.use('/notifications', notificationRoutes);
app.use('/deliveries', deliveryRoutes);

// Global Error Handler
app.use(errorHandler);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


