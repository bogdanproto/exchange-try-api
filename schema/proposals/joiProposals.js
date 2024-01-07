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
  customerEqpts: Joi.array().items(Joi.string()).required().messages({
    'any.required': 'customereqpts_array_required',
    'array.base': 'customereqpts_must_be_an_array',
    'array.empty': 'customereqpts_array_empty',
  }),

  customerTime: Joi.string().messages({
    'string.empty': 'customerTime is not allowed to be empty',
  }),
  customerMsg: Joi.string().allow(''),
});

const joiProposalAcceptShema = Joi.object({
  statusProposal: Joi.string().valid('accept', 'reject').required().messages({
    'any.required': 'status is required',
    'string.base': 'status must be a string',
    'any.only': 'status must be one of "accept" or "reject"',
  }),
  ownerMsg: Joi.string().allow(''),
});

module.exports = {
  joiProposalOwnerCreateShema,
  joiProposalCustomerUpdShema,
  joiProposalAcceptShema,
};
