const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    bedNumber: {
        type: Number,
        required: true
    },
    photo: {
        type: String,
        required: true,
        min: 3
    },
    fullname: {
        type: String,
        required: true,
        min: 3
    },
    mobile: {
        type: Number,
        required: true,
        min: 10
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        min: 4
    },
    cause: {
        type: String,
        required: true,
        min: 3
    },
    salineType: {
        type: String,
        required: true,
        min: 3
    },
    currentAmount: {
        type: Number,
        required: true,
        min: 3
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 3
    },
    doctorFullname: {
        type: String,
        required: true,
        min: 3
    },
    doctorEmail: {
        type: String,
        required: true,
        min: 3
    },
    doctorMobile: {
        type: Number,
        required: true,
        min: 10
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('patientModel', patientSchema);