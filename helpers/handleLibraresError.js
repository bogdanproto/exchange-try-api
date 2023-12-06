const handleMulterErr = require("./handleMulterErr");
const handleMongooseErr = require("./handleMongooseErr");

const lineOfFunction =
  (...functions) =>
  (err) =>
    functions.reduce((result, fn) => fn(result), err);

const handleLibraresError = lineOfFunction(handleMulterErr, handleMongooseErr);

module.exports = handleLibraresError;
