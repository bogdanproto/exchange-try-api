const HttpError = require('./errorHandlers/httpError');
const decoratorCtrl = require('./decoratorCtrl');
const handleMongooseErr = require('./errorHandlers/handleMongooseErr');
const convertToInteger = require('./convertToInteger');
const checkBoolean = require('./checkBoolean');
const handleMulterErr = require('./errorHandlers/handleMulterErr');
const handleLibraresError = require('./errorHandlers/handleLibraresError');
const handleAvatarFile = require('./fileHandlers/handleAvatarFile');
const deleteFile = require('./fileHandlers/deleteFile');
const uploadAvatarToCloud = require('./userHandlers/uploadAvatarToCloud');
const createToken = require('./userHandlers/createToken');

module.exports = {
  HttpError,
  decoratorCtrl,
  handleMongooseErr,
  handleMulterErr,
  handleLibraresError,
  handleAvatarFile,
  convertToInteger,
  checkBoolean,
  uploadAvatarToCloud,
  deleteFile,
  createToken,
};
