const Joi = require('joi');
const moment = require('moment');

const isDateFuture = (date, helpers) => {
  const currentDate = moment().startOf('day');
  const userDate = moment(date, 'YYYY-MM-DD', true);

  if (!userDate.isValid()) {
    return helpers.error('any.timebad');
  }
  if (userDate.isBefore(currentDate)) {
    return helpers.error('any.timepast');
  }
  return date;
};

const joiEqptSchema = Joi.object({
  _id: Joi.string().required().messages({
    'any.required': 'id_eqpt_required',
    'string.empty': 'id_eqpt_empty',
  }),
  label: Joi.string(),
});

const joiProposalOwnerCreateShema = Joi.object({
  ownerEqpts: Joi.array().items(Joi.string()).required().messages({
    'any.required': 'ownereqpts_array_required',
    'array.base': 'ownereqpts_must_be_an_array',
    'array.empty': 'ownereqpts_array_empty',
  }),
  spot: Joi.string().required().messages({
    'any.required': 'spot_required',
    'string.empty': 'spot_empty',
  }),

  ownerDate: Joi.string().custom(isDateFuture).required().messages({
    'any.required': 'ownerdate_required',
    'string.empty': 'ownerdate_empty',
    'any.timepast': 'ownerdate_past',
    'any.timebad': 'ownerdate_bad_format',
  }),
  ownerTime: Joi.string().required().messages({
    'any.required': 'ownertime_required',
    'string.empty': 'ownertime_empty',
  }),
  ownerMsg: Joi.string().allow(''),

  isShowPhone: Joi.boolean().required().messages({
    'any.required': 'is_show_phone_required',
    'boolean.base': 'is_show_phone_must_boolean',
  }),
  isAutoAccept: Joi.boolean().required().messages({
    'any.required': 'is_auto_accept_required',
    'boolean.base': 'is_auto_accept_must_boolean',
  }),
});

const joiProposalCustomerUpdShema = Joi.object({
  customerEqpts: Joi.array().items(joiEqptSchema).required().messages({
    'any.required': 'customerEqpts array is required',
    'array.base': 'customerEqpts must be an array',
    'array.empty': 'customerEqpts array is not allowed to be empty',
  }),

  customerTimeUnix: Joi.string().messages({
    'string.empty': 'customerTimeUnix is not allowed to be empty',
  }),
  customerMsg: Joi.string().messages({
    'string.empty': 'Customer_msg is not allowed to be empty',
  }),
});

const joiProposalAcceptShema = Joi.object({
  isAccepted: Joi.string()
    .valid('pending', 'accepted', 'rejected')
    .required()
    .messages({
      'any.required': 'is_accepted is required',
      'string.base': 'is_accepted must be a string',
      'any.only':
        'is_accepted must be one of "pending", "accepted", or "rejected"',
    }),
  ownerMsg: Joi.string().messages({
    'string.empty': 'Customer_msg is not allowed to be empty',
  }),
});

module.exports = {
  joiProposalOwnerCreateShema,
  joiProposalCustomerUpdShema,
  joiProposalAcceptShema,
};
