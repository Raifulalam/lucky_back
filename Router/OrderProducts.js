const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../Models/order');




router.post('orderData', async (req, res) => {
    const orderData = req.body;
    try {
        const newOrder = new Order({
            items: orderData.items,
            totalPrice: orderData.totalPrice,
            tax: orderData.tax,
            deliveryDate: orderData.deliveryDate
        });
        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating order' });
    }
});
module.exports = router;
