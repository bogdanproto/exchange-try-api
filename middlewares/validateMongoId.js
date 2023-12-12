const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../helpers');
const { status } = require('../consts');

const validateMongoId = (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(status.BAD_ID));
  }
  next();
};

module.exports = validateMongoId;
