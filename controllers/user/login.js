const bcrypt = require('bcryptjs');

const { User } = require('../../models');
const { decoratorCtrl, HttpError, createToken } = require('../../helpers');
const { status } = require('../../consts');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate([
    { path: 'mainsport' },
    { path: 'sports' },
    { path: 'eqpts', select: '_id title size' },
  ]);
  if (!user) {
    throw HttpError(status.USER_UNAUTHORIZED);
  }

  const isPassCorrect = await bcrypt.compare(password, user.password);

  if (!isPassCorrect) {
    throw HttpError(status.USER_UNAUTHORIZED);
  }

  const { _id } = user;

  const token = createToken(_id);

  await User.updateOne({ _id }, { token });

  res.json({
    ...status.USER_LOGIN,
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      experience: user.experience,
      avatarCloudURL: user.avatarCloudURL,
      mainsport: user.mainsport,
      sports: user.sports,
      eqpts: user.eqpts,
    },
    token,
  });
};

module.exports = decoratorCtrl(login);
