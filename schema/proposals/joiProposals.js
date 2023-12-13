const Joi = require('joi');

const joiEqptSchema = Joi.object({
  _id: Joi.string().required().messages({
    'any.required': 'Id_Eqpt is required',
    'string.empty': 'Id_Eqpt is not allowed to be empty',
  }),
  label: Joi.string(),
});

const joiProposalOwnerCreateShema = Joi.object({
  eqpts: Joi.array().items(joiEqptSchema).required().messages({
    'any.required': 'Eqpts array is required',
    'array.base': 'Eqpts must be an array',
    'array.empty': 'Eqpts array is not allowed to be empty',
  }),
  spot: Joi.object({
    _id: Joi.string().required().messages({
      'any.required': 'Id_Eqpt is required',
      'string.empty': 'Id_Eqpt is not allowed to be empty',
    }),
    label: Joi.string(),
  })
    .required()
    .messages({
      'any.required': 'Spot is required',
      'object.base': 'Spot must be an object',
    }),
  date: Joi.date().required().messages({
    'any.required': 'Date is required',
    'date.base': 'Date must be a valid date',
  }),
  time: Joi.string().required().messages({
    'any.required': 'Time is required',
    'string.empty': 'Time is not allowed to be empty',
  }),
  owner_msg: Joi.string().messages({
    'string.empty': 'Owner_msg is not allowed to be empty',
  }),
  is_show_phone: Joi.boolean().required().messages({
    'any.required': 'is_show_phone is required',
    'boolean.base': 'is_show_phone must be a boolean',
  }),
  is_auto_accept: Joi.boolean().required().messages({
    'any.required': 'is_auto_accept is required',
    'boolean.base': 'is_auto_accept must be a boolean',
  }),
});

const joiProposalCustomerUpdShema = Joi.object({
  eqpts: Joi.array().items(joiEqptSchema).required().messages({
    'any.required': 'Eqpts array is required',
    'array.base': 'Eqpts must be an array',
    'array.empty': 'Eqpts array is not allowed to be empty',
  }),

  time: Joi.string().messages({
    'string.empty': 'Time is not allowed to be empty',
  }),
  customer_msg: Joi.string().messages({
    'string.empty': 'Customer_msg is not allowed to be empty',
  }),
});

const joiProposalAcceptShema = Joi.object({
  is_accepted: Joi.string()
    .valid('pending', 'accepted', 'rejected')
    .required()
    .messages({
      'any.required': 'is_accepted is required',
      'string.base': 'is_accepted must be a string',
      'any.only':
        'is_accepted must be one of "pending", "accepted", or "rejected"',
    }),
  owner_msg: Joi.string().messages({
    'string.empty': 'Customer_msg is not allowed to be empty',
  }),
});

module.exports = {
  joiProposalOwnerCreateShema,
  joiProposalCustomerUpdShema,
  joiProposalAcceptShema,
};
