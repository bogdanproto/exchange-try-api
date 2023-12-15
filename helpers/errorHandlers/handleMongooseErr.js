const { status } = require('../../consts');

const handleMongooseErr = err => {
  const { name } = err;

  if (name !== 'ValidationError') {
    return err;
  }

  const keyError = Object.keys(err?.errors);

  if (
    name === 'ValidationError' &&
    err.errors[keyError[0]]?.kind.includes('ObjectId')
  ) {
    err.status = status.BAD_ID_MONGOOSE.status;
    err.code = status.BAD_ID_MONGOOSE.code;
    err.message = `Id ${err.errors[keyError[0]].value} from ${
      err.errors[keyError[0]].path
    } is not type of mongooseId `;
    return err;
  }

  if (name === 'ValidationError') {
    err.status = status.BAD_DATA_MONGOOSE.status;
    err.code = status.BAD_DATA_MONGOOSE.code;
    return err;
  }

  if (name === 'MongoServerError') {
    err.status = status.USER_CONFLICT.status;
    err.code = status.USER_CONFLICT.code;
    return err;
  }

  return err;
};

module.exports = handleMongooseErr;
