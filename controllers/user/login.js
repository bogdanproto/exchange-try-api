const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { User } = require('../../models');
const { decoratorCtrl, HttpError } = require('../../helpers');
const { status } = require('../../consts');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(status.USER_UNAUTHORIZED);
  }

  if (!user.verify) {
    throw HttpError(status.USER_UNVERIFY);
  }

  const isPassCorrect = await bcrypt.compare(password, user.password);

  if (!isPassCorrect) {
    throw HttpError(status.USER_UNAUTHORIZED);
  }

  const { PRIVATE_KEY } = process.env;
  const { _id } = user;

  const token = jwt.sign({ _id }, PRIVATE_KEY, { expiresIn: '12h' });

  await User.updateOne({ _id }, { token });

  res.json({
    ...status.USER_LOGIN,
    user: {
      email: user.email,
      subscription: user.subscription,
      avatarURL: user.avatarURL,
      avatarCloudURL: user.avatarCloudURL,
    },
    token,
  });
};

module.exports = decoratorCtrl(login);
