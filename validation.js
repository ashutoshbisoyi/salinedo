const Joi = require('joi');

// Registration Validation
const registrationValidation = data => {
    const schema = Joi.object({
        fullname:
            Joi.string()
                .min(4)
                .required(),
        email:
            Joi.string()
                .min(3)
                .required()
                .email(),
        mobile:
            Joi.string()
                .min(10)
                .required(),
        password:
            Joi.string()
                .min(3)
                .required()
    });
    return schema.validate(data);
};

// Login Validation
const loginValidation = data => {
    const schema = Joi.object({
        email:
            Joi.string()
                .min(3)
                .required()
                .email(),
        password:
            Joi.string()
                .min(3)
                .required()
    });
    return schema.validate(data);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;