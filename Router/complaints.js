const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint'); // Path to your Complaints model

// Endpoint to handle complaint submission
router.post('/submitComplaint', async (req, res) => {
    const { name, address, phone, province, district, product, model, warranty, issue, image } = req.body;

    try {
        const newComplaint = new Complaint({
            name,
            address,
            phone,
            province,
            district,
            product,
            model,
            warranty,
            issue,
            image
        });

        await newComplaint.save(); // Save the complaint to the database

        res.status(201).json({ success: true, message: 'Complaint submitted successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error submitting complaint', error: err.message });
    }
});

module.exports = router;
