const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;