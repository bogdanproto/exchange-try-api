const { status } = require('../../consts');
const { decoratorCtrl } = require('../../helpers');
const { Eqpt, User } = require('../../models');

const createEqpt = async (req, res) => {
  const eqpt = req.body;
  const { _id } = req.user;
  eqpt.userId = _id;

  const item = await Eqpt.create(eqpt);

  await User.findByIdAndUpdate(_id, {
    $push: { eqpts: item._id },
  });

  res.json({
    ...status.CREATED,
    data: {
      _id: item._id,
      title: item.title,
      size: item.size,
    },
  });
};

module.exports = decoratorCtrl(createEqpt);
