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
        // console.log(err);
        res.status(400).json({
            status: 'error'
        });
    }
});


// get all details
router.get('/patient', async (req, res) => {
    try {
        const patientsDetails = await patientModel.find();
        res.status(200).json(patientsDetails);
    }
    catch (error) {
        return res.status(404).json({ status: 'failed' });
    }
});

// view by bednumber
router.get('/patient/:bedNumber', async (req, res) => {
    try {
        const patientDetails = await patientModel.find(
            {
                "bedNumber": req.params.bedNumber
            });
        if (patientDetails.length == 0)
            return res.status(400).json({
                status: "Data doesn't exists"
            });
        res.status(200).json(patientDetails);
    }
    catch (error) {
        return res.status(404).json({ status: 'failed' });
    }
});

// delete a record
router.delete('/patient/:id', verify, async (req, res) => {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({ status: 'failed' });
    const data = await patientModel.findOne({ _id: _id });
    if (!data) return res.status(400).json({
        status: "Data doesn't exists"
    });
    await patientModel.findByIdAndRemove(_id);
    res.status(200).json({ status: 'success' });
});

// value update via post
router.post('/patientvalue/:id', async (req, res) => {
    const _id = req.params.id;
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

// value update via get
router.get('/patientvalue/:id', async (req, res) => {
    const _id = req.params.id;
    var currentAmount = req.query.amount;
    const data = {
        currentAmount: currentAmount
    }
    try {
        await patientModel.findByIdAndUpdate(_id, { ...data }, { new: true });
        res.status(200).json({ status: 'success' });
    }
    catch (err) {
        console.log(err);
        return res.status(404).json({ status: 'failed' });
    }
});

module.exports = router;