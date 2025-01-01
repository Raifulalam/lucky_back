const express = require('express');
const router = express.Router();
const Product = require('../Models/products');

// Create multiple products
router.post('/products', async (req, res) => {
    try {
        const {
            name,
            mrp,
            price,
            category,
            modalNumber,
            description,
            image,
            keywords,
            brand,
            capacity,
        } = req.body;

        // Create a new product using the incoming data
        const newProduct = new Product({
            name,
            mrp,
            price,
            category,
            modalNumber,
            description,
            image,
            keywords,
            brand,
            capacity,
        });

        // Save the new product to the database
        await newProduct.save();
        res.status(200).json(newProduct);  // Send back the saved product
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Get all products or filter by category
router.get('/products', async (req, res) => {
    try {
        const { category } = req.query;
        const matchCriteria = category ? { category: category } : {};

        // First, identify and remove duplicates based on the 'model' field
        const duplicates = await Product.aggregate([
            { $match: matchCriteria },  // Match by category if specified
            {
                $group: {
                    _id: "$model",  // Group by model to identify duplicates
                    productDetails: { $first: "$$ROOT" },  // Get the first occurrence of each model
                    count: { $sum: 1 }  // Count the number of occurrences of each model
                }
            },
            {
                $match: { count: { $gt: 1 } }  // Only keep groups with more than 1 document (duplicates)
            }
        ]);

        // Now delete the duplicates from the collection
        for (let duplicate of duplicates) {
            await Product.deleteMany({
                model: duplicate._id,  // Find documents with the same model
                _id: { $ne: duplicate.productDetails._id }  // Exclude the one to keep
            });
        }

        // After duplicates are deleted, fetch the remaining products (unique models)
        const products = await Product.aggregate([
            { $match: matchCriteria },  // Match by category if specified
            {
                $group: {
                    _id: "$model",  // Group by model to get unique products
                    productDetails: { $first: "$$ROOT" }  // Get the first document for each unique model
                }
            },
            { $replaceRoot: { newRoot: "$productDetails" } }  // Replace root with the product details
        ]);

        res.status(200).json(products);  // Send the unique products back to the client
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



//get products by brand
router.get('/products/:brand', async (req, res) => {
    try {
        const { brand } = req.params;  // Get the brand from URL parameters
        const products = await Product.find({ brand: brand });  // Find products by brand
        res.status(200).json(products);  // Send products to the client
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// Get a product by ID
router.get('/productsDetails/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // Find a product by ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product); // Return the found product
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete product
router.delete('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);  // Find and delete product by ID
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a product
router.put('/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Update the product
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);  // Return the updated product
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;  // Export the router so it can be used in the main app
