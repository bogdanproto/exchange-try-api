const Joi = require('joi');

const joiSpotSchema = Joi.object({
  sport: Joi.string().required().messages({
    'any.required': 'ID of spot is required',
    'string.empty': 'ID of spot is not allowed to be empty',
  }),
});

module.exports = joiSpotSchema;
