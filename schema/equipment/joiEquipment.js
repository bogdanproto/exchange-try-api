const Joi = require('joi');

const joiEqptCreateSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'title_required',
    'string.empty': 'title_empty',
  }),
  size: Joi.string().required().messages({
    'any.required': 'size_required',
    'string.empty': 'size_empty',
  }),
});

module.exports = joiEqptCreateSchema;
