const { isValidObjectId } = require('mongoose');
const HttpError = require('../errorHandlers/httpError');
const { status } = require('../../consts');

const toCheckIdInCollection = async (id, collection) => {
  if (!isValidObjectId(id)) {
    throw HttpError(status.BAD_ID);
  }

  const doc = await collection.findById(id);

  if (!doc) {
    throw HttpError(status.NOT_FOUND_ID);
  }

  return doc;
};

module.exports = toCheckIdInCollection;
