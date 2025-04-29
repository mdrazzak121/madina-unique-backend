const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: String,
    customerPhone: String,
    address: String,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);