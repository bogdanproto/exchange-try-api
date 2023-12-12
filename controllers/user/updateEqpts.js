const { decoratorCtrl } = require('../../helpers');
const { User } = require('../../models');
const { status } = require('../../consts');
const { nanoid } = require('nanoid');

const updateEqpts = async (req, res) => {
  const eqpt = req.body;
  const { _id } = req.user;

  eqpt.serviceId = nanoid();

  const { equipments } = await User.findByIdAndUpdate(
    _id,
    {
      $push: { equipments: eqpt },
    },
    { new: true, select: '-_id equipments' }
  );

  const item = equipments.find(item => item.serviceId === eqpt.serviceId);

  res.json({
    ...status.CREATED,
    eqpt: {
      _id: item._id,
      title: item.title,
      size: item.size,
    },
  });
};

module.exports = decoratorCtrl(updateEqpts);
