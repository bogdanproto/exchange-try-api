const { decoratorCtrl } = require('../../helpers');
const { status } = require('../../consts');

const getCurrent = async (req, res) => {
  const { email, name, avatarCloudURL } = req.user;

  res.json({
    ...status.USER_CURRENT,
    user: { email, name, avatarCloudURL },
  });
};

module.exports = decoratorCtrl(getCurrent);
