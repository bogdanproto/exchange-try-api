const Jimp = require('jimp');
const path = require('path');
const fs = require('fs/promises');
require('dotenv').config();

const handleAvatarFile = async (objId, file) => {
  const { path: tempPath, destination, originalname } = file;
  console.log(file);

  const id = objId.toString();

  const arr = [...originalname];
  const idxExtension = arr.lastIndexOf('.');
  const extensionFile = arr.splice(idxExtension, arr.length - 1).join('');

  const fileName = `${id}${extensionFile}`;

  const avatarPath = path.join(destination, fileName);

  const imgOptimized = await Jimp.read(tempPath);
  await imgOptimized.resize(250, Jimp.AUTO).writeAsync(tempPath);

  await fs.rename(tempPath, avatarPath);

  return avatarPath;
};

module.exports = handleAvatarFile;
