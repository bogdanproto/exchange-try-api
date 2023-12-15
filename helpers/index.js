const HttpError = require('./errorHandlers/httpError');
const decoratorCtrl = require('./common/decoratorCtrl');
const handleMongooseErr = require('./errorHandlers/handleMongooseErr');
const convertToInteger = require('./common/convertToInteger');
const checkBoolean = require('./common/checkBoolean');
const handleMulterErr = require('./errorHandlers/handleMulterErr');
const handleLibraresError = require('./errorHandlers/handleLibraresError');
const handleAvatarFile = require('./fileHandlers/handleAvatarFile');
const deleteFile = require('./fileHandlers/deleteFile');
const uploadAvatarToCloud = require('./userHandlers/uploadAvatarToCloud');
const createToken = require('./userHandlers/createToken');
const handleId = require('./common/handleId');
const handleArrayId = require('./common/handleArrayId');
const proposalHandler = require('./resHandlers/proposalHandler');

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
  handleId,
  handleArrayId,
  proposalHandler,
};
