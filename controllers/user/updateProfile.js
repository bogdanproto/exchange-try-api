const { status, collectionDB } = require('../../consts');
const { decoratorCtrl, handleArrayId } = require('../../helpers');
const { User } = require('../../models');

const updateProfile = async (req, res) => {
  const { _id } = req.user;
  const { name, phone, equipments } = req.body;

  const correctEqpts = await handleArrayId(equipments, collectionDB.EQPTS);

  const user = await User.findByIdAndUpdate(
    _id,
    { name, phone, equipments: correctEqpts },
    {
      new: true,
      select: '-_id phone name equipments',
    }
  );

  res.json({ ...status.USER_UPDATE, user });
};

module.exports = decoratorCtrl(updateProfile);
