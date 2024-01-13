const { status } = require('../../consts');
const HttpError = require('../errorHandlers/httpError');
const convertToInteger = require('./convertToInteger');

const createPagination = query => {
  const { page, limit } = query;

  if (!page && !limit) {
    return null;
  }

  const intPage = convertToInteger(page);
  const intLimit = convertToInteger(limit);

  if (!intPage || !intLimit) {
    throw HttpError({
      ...status.BAD_PARAMS,
      message: 'Page or limit are incorrect',
    });
  }

  return {
    skip: (intPage - 1) * limit,
    limit: intLimit,
  };
};

module.exports = createPagination;
