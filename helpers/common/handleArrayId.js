const { isValidObjectId } = require('mongoose');
const HttpError = require('../errorHandlers/httpError');
const { status } = require('../../consts');

const handleArrayId = async (arr, collection) => {
  if (!arr.length) {
    return arr;
  }

  const isIdCorrect = arr.every(id => isValidObjectId(id));

  if (!isIdCorrect) {
    throw HttpError(status.BAD_ID);
  }

  const foundedIds = await collection.find({ _id: { $in: arr } }, '_id');

  if (foundedIds.length !== arr.length) {
    throw HttpError(status.NOT_FOUND_ID);
  }

  return foundedIds;
};

module.exports = handleArrayId;
