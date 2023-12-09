const Joi = require('joi');

const joiSportSchema = Joi.object({
  sport: Joi.string().required().messages({
    'any.required': 'ID of sport is required',
    'string.empty': 'ID of sport is not allowed to be empty',
  }),
});

module.exports = joiSportSchema;
