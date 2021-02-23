const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        min: 3
    },
    mobile: {
        type: String,
        required: true,
        min: 3
    },
    password: {
        type: String,
        required: true,
        min: 3
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('doctorModel', doctorSchema);