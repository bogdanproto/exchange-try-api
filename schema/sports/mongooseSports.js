const { Schema } = require('mongoose');

const mongooseSportShema = new Schema(
  {
    sport: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Set as min one sport'],
    },
  },
  { timestamps: true }
);

module.exports = mongooseSportShema;
