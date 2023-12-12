const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { User } = require('../../models');

const updateProfile = async (req, res) => {
  const { _id } = req.user;
  const { name, phone } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    { name, phone },
    {
      new: true,
      select: '-_id phone name',
    }
  );

  res.json({ ...status.USER_UPDATE, user });
};

module.exports = decoratorCtrl(updateProfile);
