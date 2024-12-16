const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComplaintsSchema = new Schema({
    name: { type: String, required: true }, // Name of the customer
    address: { type: String, required: true }, // Customer's address
    phone: { type: String, required: true }, // Customer's phone number
    province: { type: String, required: true }, // Province selected by the customer
    district: { type: String, required: true }, // District selected by the customer
    product: { type: String, required: true }, // Product name
    model: { type: String, required: true }, // Product model number
    warranty: { type: String, required: true }, // Warranty status (yes/no)
    issue: { type: String, required: true }, // Description of the issue
    image: { type: String, required: true }, // Product image (URL or file path)
    createdAt: { type: Date, default: Date.now }, // Timestamp of when the complaint was created
});

// Create the model for complaints
const Complaint = mongoose.model('Complaint', ComplaintsSchema);

module.exports = Complaint;
