const { decoratorCtrl } = require('../../helpers');
const { status } = require('../../consts');

const getCurrent = async (req, res) => {
  const { email, name, avatarCloudURL, phone, mainsport, sports, equeipments } =
    req.user;

  res.json({
    ...status.USER_CURRENT,
    user: {
      email,
      name,
      avatarCloudURL,
      phone,
      mainsport,
      sports,
      equeipments,
    },
  });
};

module.exports = decoratorCtrl(getCurrent);
