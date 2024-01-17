const { Schema } = require('mongoose');

const mongooseSpotShema = new Schema(
  {
    spot: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Set as min one spot'],
    },
    lat: {
      type: Number,
      default: null,
    },
    lon: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongooseSpotShema;
