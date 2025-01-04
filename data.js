const mongoose = require('mongoose');

// ** Connection to the Notification Database **
mongoose.connect('mongodb://localhost:27017/Notification', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to the Notification database'))
.catch(err => console.log('Error connecting to the Notification database:', err));

// Define the schema for the Notif collection in the Notification database
const notifSchema = new mongoose.Schema({
  recipient: String,
  message: String,
  type: String,
  sentAt: Date,
  isRead: Boolean,
  createdAt: { type: Date, default: Date.now }
});

// Create the model for the Notif collection
const Notif = mongoose.model('Notif', notifSchema);

// Insert a document into the Notif collection
Notif.create({
  recipient: "user99@example.com",
  message: "Votre commande a été expédiée !",
  type: "order-update",
  sentAt: new Date("2024-08-18T12:00:00Z"),
  isRead: false,
  createdAt: new Date("2024-08-18T12:00:00Z")
})
.then(() => console.log("Notification inserted"))
.catch(err => console.log(err));


// ** Connection to the Delivery Database **
mongoose.connect('mongodb://localhost:27017/Delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to the Delivery database'))
.catch(err => console.log('Error connecting to the Delivery database:', err));

// Define the schema for the DeliveryP collection in the Delivery database
const deliverySchema = new mongoose.Schema({
  recipient: String,
  message: String,
  type: String,
  sentAt: Date,
  isRead: Boolean,
  createdAt: { type: Date, default: Date.now }
});

// Create the model for the DeliveryP collection
const DeliveryP = mongoose.model('DeliveryP', deliverySchema);

// Insert a document into the DeliveryP collection
DeliveryP.create({
  recipient: "user96@example.com",
  message: "Votre commande a été expédiée par le transporteur !",
  type: "delivery-update",
  sentAt: new Date("2024-08-18T14:00:00Z"),
  isRead: false,
  createdAt: new Date("2024-08-18T14:00:00Z")
})
.then(() => console.log("Delivery inserted"))
.catch(err => console.log(err));

