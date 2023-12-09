const { Schema } = require('mongoose');

const mongooseEqptShema = new Schema(
  {
    type: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Set type'],
    },
    item: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Set item eqpt'],
    },
  },
  { timestamps: true }
);

module.exports = mongooseEqptShema;
