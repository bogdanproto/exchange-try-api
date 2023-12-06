const { User } = require("../../models");
const { decoratorCtrl, HttpError, sendVerifyEmail } = require("../../helpers");
const { status } = require("../../consts");

const updateVerificateUser = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(status.NOT_FOUND);
  }

  if (user.verify) {
    throw HttpError(status.USER_VERIFY_ALREADY);
  }

  await sendVerifyEmail(user);

  res.json(status.USER_RE_VERIFY);
};

module.exports = decoratorCtrl(updateVerificateUser);
