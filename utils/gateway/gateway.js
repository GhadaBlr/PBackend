const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// Define service targets
const services = [
    { name: 'notification', url: 'http://localhost:3000/notifications' },
    { name: 'delivery', url: 'http://localhost:3000/deliveries' }
];

// Middleware to route requests
app.use((req, res, next) => {
    if (req.path.startsWith('/notifications')) {
        req.targetService = services.find(service => service.name === 'notification');
    } else if (req.path.startsWith('/deliveries')) {
        req.targetService = services.find(service => service.name === 'delivery');
    }

    if (req.targetService) {
        next();
    } else {
        res.status(404).send({ message: 'Service not found' });
    }
});

// Proxy requests to the target service
app.use(async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `${req.targetService.url}${req.path.replace(/^\/(notifications|deliveries)/, '')}`,
            data: req.body
        });
        res.status(response.status).send(response.data);
    } catch (error) {
        console.error('Error forwarding request:', error.message);
        res.status(500).send({ message: 'Error communicating with the target service' });
    }
});

// Start the gateway
app.listen(port, () => {
    console.log(`Gateway running on http://localhost:${port}`);
});
