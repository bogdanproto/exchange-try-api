const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');
const { HttpError } = require('../helpers');
const { status } = require('../consts');

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  const [bearer, token] = authorization?.split(' ') ?? [];

  if (bearer !== 'Bearer' || !token) {
    next(HttpError(status.USER_UNAUTHORIZEDTOKEN));
    return;
  }

  try {
    const { PRIVATE_KEY } = process.env;
    const { _id } = jwt.verify(token, PRIVATE_KEY);

    const user = await User.findById(_id);

    if (!user || !user.token || user.token !== token) {
      next(HttpError(status.USER_UNAUTHORIZEDTOKEN));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(status.USER_UNAUTHORIZEDTOKEN));
  }
};

module.exports = authenticate;
