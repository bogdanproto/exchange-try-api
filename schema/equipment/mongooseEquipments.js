const { Schema } = require('mongoose');

const mongooseEqptShema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
    },
    size: {
      type: String,
      trim: true,
      required: [true, 'Size is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'User is required'],
    },
  },
  { timestamps: true }
);

module.exports = mongooseEqptShema;
