const Joi = require('joi');

const joiEqptSchema = Joi.object({
  type: Joi.string().required().messages({
    'any.required': 'type is required',
    'string.empty': 'type is not allowed to be empty',
  }),
  item: Joi.string().required().messages({
    'any.required': 'ID of item is required',
    'string.empty': 'ID of item is not allowed to be empty',
  }),
});

module.exports = joiEqptSchema;
