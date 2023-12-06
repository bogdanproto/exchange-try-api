const { User } = require("../../models");
const { decoratorCtrl, HttpError } = require("../../helpers");
const { status, htmlAnswer } = require("../../consts");

const verificateUser = async (req, res) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(status.NOT_FOUND);
  }

  await User.updateOne(
    { _id: user._id },
    { verificationToken: null, verify: true }
  );

  res.send(htmlAnswer.VERIFY_SUCCESS);
};

module.exports = decoratorCtrl(verificateUser);
