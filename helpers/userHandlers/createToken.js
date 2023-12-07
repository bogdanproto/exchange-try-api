const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = id => {
  const { PRIVATE_KEY } = process.env;

  return jwt.sign({ id }, PRIVATE_KEY, { expiresIn: '12h' });
};

module.exports = createToken;
