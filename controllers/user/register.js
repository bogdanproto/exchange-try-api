const bcrypt = require('bcryptjs');

const { User } = require('../../models');
const { decoratorCtrl, HttpError, createToken } = require('../../helpers');
const { status } = require('../../consts');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(status.USER_CONFLICT);
  }

  const hashPass = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    name,
    password: hashPass,
  });
  const { _id } = newUser;

  const token = createToken(_id);

  await User.updateOne({ _id }, { token });

  res.status(status.CREATED.status).json({
    ...status.CREATED,
    user: {
      email: newUser.email,
      name: newUser.name,
    },
    token,
  });
};

module.exports = decoratorCtrl(register);
