const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('./Models/products');


app.post('/products', async (req, res) => {
    try {
        const productsData = req.body.Products;
        const products = await Product.insertMany(productsData);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/products', (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(500).json({ message: err.message }));
});
app.get('/productsDetails/:id', async (req, res) => {
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

//deleece product
app.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//edit product
app.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;