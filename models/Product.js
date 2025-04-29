const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);