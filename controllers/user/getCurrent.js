const { decoratorCtrl } = require("../../helpers");
const { status } = require("../../consts");

const getCurrent = async (req, res) => {
  const { email, subscription, avatarURL, avatarCloudURL } = req.user;

  res.json({
    ...status.USER_CURRENT,
    user: { email, subscription, avatarURL, avatarCloudURL },
  });
};

module.exports = decoratorCtrl(getCurrent);
