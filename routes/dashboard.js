const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Order = require('../models/Order');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, async (req, res) => {
    const productCount = await Product.countDocuments();
    const orderCount = await Order.countDocuments();
    res.json({ productCount, orderCount });
});

module.exports = router;