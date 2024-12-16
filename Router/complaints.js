const express = require('express');
const router = express.Router();
const Complaint = require('../Models/complaintsSchema');
const multer = require('multer');
const path = require('path');

// Configure multer storage and file validation
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        // Save files with a unique name (timestamp + original file extension)
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize multer with storage configuration and file filter for validation
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/; // Allowed image types
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed (jpeg, jpg, png, gif)'));
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

// Endpoint to handle complaint submission with image
router.post('/submitComplaint', upload.single('image'), async (req, res) => {
    const { name, address, phone, province, district, product, model, warranty, issue } = req.body;

    // If the image is uploaded, get its file path
    const image = req.file ? `/uploads/${req.file.filename}` : null;

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
            image // Store the image path in the database
        });

        await newComplaint.save(); // Save the complaint to the database

        res.status(201).json({ success: true, message: 'Complaint submitted successfully!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error submitting complaint', error: err.message });
    }
});

module.exports = router;
