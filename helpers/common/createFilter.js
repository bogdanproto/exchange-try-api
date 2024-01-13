const moment = require('moment');
const { status } = require('../../consts');
const { Spot } = require('../../models');
const HttpError = require('../errorHandlers/httpError');
const toCheckIdInCollection = require('./toCheckIdInCollection');
const toCheakIsDateFuture = require('./toCheckIsDateFuture');

const createFilter = async objFilters => {
  const currentDate = moment().endOf('day').format('YYYY-MM-DD');
  const { date, spot } = objFilters;

  if (date) {
    const isDateCorrect = toCheakIsDateFuture(date);

    if (isDateCorrect !== date) {
      throw HttpError({ ...status.BAD_PARAMS, message: isDateCorrect });
    }
  }

  if (spot) {
    await toCheckIdInCollection(spot, Spot);
  }

  return {
    ...(date
      ? { ownerDate: date }
      : { ownerDate: { $exists: true, $gte: currentDate } }),
    ...(spot ? { spot } : {}),
  };
};

module.exports = createFilter;
