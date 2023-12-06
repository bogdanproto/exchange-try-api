const { User } = require("../../models");
const { decoratorCtrl } = require("../../helpers");
const { status } = require("../../consts");
const { handleAvatarFile, uploadAvatarToCloud } = require("../../helpers");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;

  const { avatarURL, avatarPath } = await handleAvatarFile(_id, req.file);
  const avatarCloudURL = await uploadAvatarToCloud(avatarPath);

  const updateUser = await User.findByIdAndUpdate(
    _id,
    { avatarURL, avatarCloudURL },
    {
      new: true,
      select: "-_id email subscription avatarURL avatarCloudURL",
    }
  );

  res.json({ ...status.USER_UPDATE, updateUser });
};

module.exports = decoratorCtrl(updateAvatar);
