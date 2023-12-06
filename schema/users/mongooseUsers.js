const check = require("validator");
const gravatar = require("gravatar");
const { Schema } = require("mongoose");
const { subscription } = require("../../consts");

const mongooseUserShema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (value) => check.isEmail(value),
        message: "Email has wrong format",
      },
    },
    subscription: {
      type: String,
      enum: subscription,
      default: "starter",
    },
    avatarURL: {
      type: String,
      required: true,
      default: function () {
        return gravatar.url(this.email);
      },
    },
    avatarCloudURL: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: null,
      required: [true, "Verify token is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongooseUserShema;
