const Joi = require('joi');

exports.validateSignup = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    displayName: Joi.string().min(3).required(),
    role: Joi.string().valid('doctor', 'patient').required(),
  });

  return schema.validate(data);
};

exports.validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};
