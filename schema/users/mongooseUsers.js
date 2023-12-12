const check = require('validator');
const mongoose = require('mongoose');
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
    phone: {
      type: String,
      default: null,
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
    mainsport: {
      type: Schema.Types.ObjectId,
      ref: 'sport',
      required: [true, 'Set main sport'],
      default: () => new mongoose.Types.ObjectId('65743d3192dc689bb4b14328'),
    },
    sports: {
      type: [Schema.Types.ObjectId],
      ref: 'sport',
      required: [true, 'Set as min one sport'],
      default: function () {
        return [this.mainsport];
      },
    },
    equipments: {
      type: [
        {
          serviceId: {
            type: String,
            required: [true, 'ServiceId is required'],
          },
          title: {
            type: String,
            required: [true, 'Title is required'],
          },
          size: {
            type: String,
            required: [true, 'Size is required'],
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongooseUserShema;
