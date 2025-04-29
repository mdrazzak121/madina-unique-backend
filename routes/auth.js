const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (email === 'admin@madinafashion.com' && password === '123456') {
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.json({ token });
    }

    return res.status(400).json({ message: 'Invalid credentials' });
});

module.exports = router;