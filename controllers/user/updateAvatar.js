const { User } = require('../../models');
const { status } = require('../../consts');
const {
  decoratorCtrl,
  handleAvatarFile,
  deleteFile,
  uploadAvatarToCloud,
} = require('../../helpers');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const avatarPath = await handleAvatarFile(_id, req.file);
  const avatarCloudURL = await uploadAvatarToCloud(avatarPath);
  await deleteFile(avatarPath);

  const user = await User.findByIdAndUpdate(
    _id,
    { avatarCloudURL },
    {
      new: true,
      select: '-_id email name avatarCloudURL',
    }
  );

  res.json({ ...status.USER_UPDATE, user });
};

module.exports = decoratorCtrl(updateAvatar);
