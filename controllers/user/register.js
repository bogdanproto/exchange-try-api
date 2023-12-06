const bcrypt = require("bcryptjs");
const { nanoid } = require("nanoid");

const { User } = require("../../models");
const { decoratorCtrl, HttpError, sendVerifyEmail } = require("../../helpers");
const { status } = require("../../consts");

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(status.USER_CONFLICT);
  }

  const verificationToken = nanoid();
  const hashPass = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    email,
    password: hashPass,
    verificationToken,
  });

  await sendVerifyEmail(newUser);

  res.status(status.CREATED.status).json({
    ...status.CREATED,
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
      avatarURL: newUser.avatarURL,
      verify: newUser.verify,
    },
  });
};

module.exports = decoratorCtrl(register);
