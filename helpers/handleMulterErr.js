const multer = require("multer");
const { status } = require("../consts");

const handleMulterErr = (err) => {
  if (err instanceof multer.MulterError) {
    err.status = status.UNSUPPORTED_TYPE.status;
    err.message = err.code;
    return err;
  }

  return err;
};

module.exports = handleMulterErr;
