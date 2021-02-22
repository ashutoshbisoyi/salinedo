const Joi = require('joi');

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