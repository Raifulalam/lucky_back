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


router.get('/products', async (req, res) => {
    try {
        const { category, brand } = req.query;  // Get category and brand from query parameters

        let matchCriteria = {};  // Default empty match criteria

        // Add category condition if provided
        if (category) {
            matchCriteria.category = category;
        }

        // Add brand condition if provided
        if (brand) {
            matchCriteria.brand = brand;
        }

        // Aggregate to group by 'model' and get unique products based on their model
        const products = await Product.aggregate([
            {
                $match: matchCriteria  // Apply filters for category and/or brand
            },
            {
                $group: {
                    _id: "$model",  // Group by model to ensure uniqueness
                    productDetails: { $first: "$$ROOT" }  // Keep the first product document per model
                }
            },
            {
                $replaceRoot: { newRoot: "$productDetails" }  // Flatten the document structure
            }
        ]);

        res.status(200).json(products);  // Send unique products based on model to the client
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
