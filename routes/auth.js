const router = require('express').Router();
const doctorModel = require('../models/doctorModel');
const { registrationValidation } = require('../validation');
const { loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/register', async (req, res) => {
    // validation check 
    const { error } = registrationValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check existing email
    const emailExist = await doctorModel.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).json({
        status: 'exists'
    });

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //new user
    const user = new doctorModel({
        fullname: req.body.fullname,
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashPassword
    });
    try {
        const savedUser = await user.save();
        res.status(201).json({
            uid: savedUser._id,
            fullname: savedUser.fullname,
            email: savedUser.email,
            status: 'success'
        });
    } catch (err) {
        res.status(400).json({
            status: 'error'
        });
    }
});

//login auth
router.post('/login', async (req, res) => {
    //checking validation
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0]);

    //checking existing mail or not
    const user = await doctorModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({
        status: 'invalid credentials'
    });

    //matching bcrypt password with input pass
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json({
        status: 'invalid credentials'
    });

    //assigning token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "12h"
    });
    res.json({
        status: 'success',
        token: token,
        uid: user._id,
        fullname: user.fullname,
        email: user.email
    });
});

module.exports = router;