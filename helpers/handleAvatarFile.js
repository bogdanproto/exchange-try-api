const Jimp = require('jimp');
const path = require('path');
const fs = require('fs/promises');
require('dotenv').config();

const handleAvatarFile = async (objId, file) => {
  const { DIR_STATIC, DIR_AVATARS } = process.env;
  const { path: tempPath, originalname } = file;

  const id = objId.toString();

  const arr = [...originalname];
  const idxExtension = arr.lastIndexOf('.');
  const extensionFile = arr.splice(idxExtension, arr.length - 1).join('');

  const fileName = `${id}${extensionFile}`;

  const avatarPath = path.join(
    process.cwd(),
    DIR_STATIC,
    DIR_AVATARS,
    fileName
  );

  const imgOptimized = await Jimp.read(tempPath);
  await imgOptimized.resize(250, Jimp.AUTO).writeAsync(tempPath);

  await fs.rename(tempPath, avatarPath);

  const avatarURL = path.join(DIR_AVATARS, fileName);

  return { avatarURL, avatarPath };
};

module.exports = handleAvatarFile;
