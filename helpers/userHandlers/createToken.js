const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = _id => {
  const { PRIVATE_KEY } = process.env;

  return jwt.sign({ _id }, PRIVATE_KEY, { expiresIn: '12h' });
};

module.exports = createToken;
