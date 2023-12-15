const bcrypt = require('bcryptjs');

const { User } = require('../../models');
const { decoratorCtrl, HttpError, createToken } = require('../../helpers');
const { status } = require('../../consts');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw HttpError(status.USER_CONFLICT);
  }

  const hashPass = await bcrypt.hash(password, 10);

  const { _id } = await User.create({
    email,
    name,
    password: hashPass,
  });

  const token = createToken(_id);

  const user = await User.findByIdAndUpdate(
    _id,
    { token },
    { new: true, select: '-_id name email sports mainsport' }
  ).populate([{ path: 'sports' }, { path: 'mainsport' }]);

  res.status(status.CREATED.status).json({
    ...status.CREATED,
    user,
    token,
  });
};

module.exports = decoratorCtrl(register);
