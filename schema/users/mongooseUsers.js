const check = require('validator');
const { Schema } = require('mongoose');

const mongooseUserShema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: value => check.isEmail(value),
        message: 'Email has wrong format',
      },
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    avatarCloudURL: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongooseUserShema;
