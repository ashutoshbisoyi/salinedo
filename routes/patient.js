const router = require('express').Router();
const verify = require('./verifyToken');
const patientModel = require('../models/patientModel');
const mongoose = require('mongoose');
const url = require('url');

mongoose.set('useFindAndModify', false);

// init patient
router.post('/patient', verify, async (req, res) => {
    const data = req.body;
    const patient = new patientModel(data);
    try {
        await patient.save();
        res.status(201).json({
            status: 'success'
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'error'
        });
    }
});

router.get('/patient/:id', async (req, res) => {
    const _id= req.params.id;
    var currentAmount = req.query.amount;
    const data = {
        currentAmount: currentAmount
    }
    try {
        await patientModel.findByIdAndUpdate(_id, { ...data }, { new: true });
        res.status(200).json({ status: 'success' });
    }
    catch (err) {
        return res.status(404).json({ status: 'failed' });
    }
});

module.exports = router;