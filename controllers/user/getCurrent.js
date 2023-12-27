const { decoratorCtrl } = require('../../helpers');
const { status } = require('../../consts');

const getCurrent = async (req, res) => {
  const {
    _id,
    email,
    name,
    avatarCloudURL,
    phone,
    experience,
    mainsport,
    sports,
    eqpts,
  } = req.user;

  res.json({
    ...status.USER_CURRENT,
    user: {
      _id,
      email,
      name,
      avatarCloudURL,
      phone,
      experience,
      mainsport,
      sports,
      eqpts,
    },
  });
};

module.exports = decoratorCtrl(getCurrent);
