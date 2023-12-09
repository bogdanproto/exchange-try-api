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
  },
  { timestamps: true }
);

module.exports = mongooseSpotShema;
