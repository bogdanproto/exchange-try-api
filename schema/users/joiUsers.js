const Joi = require('joi');
const moment = require('moment');

const isDateFuture = (date, helpers) => {
  const currentDate = moment().startOf('day');
  const userDate = moment(date, 'YYYY-MM-DD', true);

  if (!userDate.isValid()) {
    return helpers.error('any.timebad');
  }
  if (userDate.isAfter(currentDate)) {
    return helpers.error('any.timefuture');
  }
  return date;
};

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

const joiUpdateUserSchema = Joi.object({
  name: Joi.string().messages({
    'string.empty': 'Name is not allowed to be empty',
  }),
  phone: Joi.string().messages({
    'string.empty': 'Phone is not allowed to be empty',
  }),
  experience: Joi.string().custom(isDateFuture).messages({
    'any.timefuture': 'experiencedate_future',
    'any.timebad': 'experiencedate_bad_format',
  }),
}).or('name', 'phone', 'experience');

const joiUpdateEqptSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': 'Title is not allowed to be empty',
    'any.required': 'Title is required',
  }),
  size: Joi.string().required().messages({
    'string.empty': 'Size is not allowed to be empty',
    'any.required': 'Size is required',
  }),
});

module.exports = {
  joiRegisterSchema,
  joiLoginSchema,
  joiUpdateUserSchema,
  joiUpdateEqptSchema,
};
