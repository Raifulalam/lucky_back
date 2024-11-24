const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



app.post('/api/products', async (req, res) => {
    try {
        const productsData = req.body.Products;
        const products = await Product.insertMany(productsData);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/products', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
});
app.get('/api/productsDetails/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // Find a product by its ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); // If no product found, return 404
        }
        res.status(200).json(product); // Return the found product
    } catch (error) {
        res.status(500).json({ message: error.message }); // Return any server error
    }
});

module.exports = router;