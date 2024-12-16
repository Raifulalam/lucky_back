const express = require('express');
const router = express.Router();
const Complaint = require('../Models/complaintsSchema');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configure multer storage and file validation
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Save uploaded files to the 'uploads' directory
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
            return cb(new Error('Only image files are allowed (jpeg, jpg, png, gif)'));
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

// Endpoint to handle complaint submission with image
router.post('/submitComplaint', upload.single('image'), async (req, res) => {
    const { name, address, phone, province, district, product, model, warranty, issue } = req.body;

    // If the image is uploaded, get its file content as binary data (Buffer)
    const image = req.file ? fs.readFileSync(req.file.path) : null;

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
            image // Store the image as Buffer in the database
        });

        await newComplaint.save(); // Save the complaint to the database

        // Optionally, delete the image from the server after storing it in the database
        if (req.file) {
            fs.unlinkSync(req.file.path); // Clean up the uploaded image file from the server
        }

        res.status(201).json({ success: true, message: 'Complaint submitted successfully!' });
    } catch (err) {
        console.error('Error:', err);
        if (err.message === 'Only image files are allowed (jpeg, jpg, png, gif)') {
            return res.status(400).json({ success: false, message: 'Invalid file type. Only image files are allowed.' });
        }
        res.status(500).json({ success: false, message: 'Error submitting complaint', error: err.message });
    }
});

// Endpoint to retrieve the image from the database
router.get('/getComplaints', async (req, res) => {
    try {

        const complaints = await Complaint.find(); // Corrected 'complaints' to 'Complaint'

        // If no complaints found, return 404
        if (complaints.length === 0) {
            return res.status(404).json({ success: false, message: 'Complaints Not Found' });
        }

        // Send the complaints as response
        res.json({ success: true, complaints });

    } catch (err) {
        // Log and handle any errors that occur during the database operation
        console.error('Error:', err);
        res.status(500).json({ success: false, message: 'Error retrieving complaints', error: err.message });
    }
});




module.exports = router;
