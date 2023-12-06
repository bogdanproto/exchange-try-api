const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  secure: true,
});

const uploadAvatarToCloud = async imagePath => {
  const options = {
    use_filename: true,
    unique_filename: false,
    folder: 'avatars',
    overwrite: true,
  };

  const { url } = await cloudinary.uploader.upload(imagePath, options);

  return url;
};

module.exports = uploadAvatarToCloud;
