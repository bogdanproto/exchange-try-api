const Joi = require('joi');

const joiRegisterSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.empty': 'Name is not allowed to be empty',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
    }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is not allowed to be empty',
  }),
});

const joiLoginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .messages({
      'any.required': 'Email is required',
      'string.empty': 'Email is not allowed to be empty',
    }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password is not allowed to be empty',
  }),
});

module.exports = { joiRegisterSchema, joiLoginSchema };
