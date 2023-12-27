const { Schema } = require('mongoose');

const mongooseProposalSchema = new Schema(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'ownerId is required'],
    },
    ownerEqpts: {
      type: [Schema.Types.ObjectId],
      ref: 'eqpt',
      required: [true, 'Set as min one equipment'],
    },
    spot: {
      type: Schema.Types.ObjectId,
      ref: 'spot',
      required: [true, 'Spot is required'],
    },
    ownerDate: {
      type: String,
      required: [true, 'Date is required'],
    },
    ownerTime: {
      type: String,
      required: [true, 'Time is required'],
    },
    ownerMsg: {
      type: String,
      default: null,
    },
    isShowPhone: {
      type: Boolean,
      default: false,
    },
    isAutoAccept: {
      type: Boolean,
      default: false,
    },

    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: null,
    },
    customerEqpts: {
      type: [Schema.Types.ObjectId],
      ref: 'eqpt',
      default: null,
    },

    customerTime: {
      type: String,
      default: null,
    },
    customerMsg: {
      type: String,
      default: null,
    },

    isAccepted: {
      type: String,
      default: 'pending',
      enum: ['pending', 'reservation', 'accepted'],
    },
  },
  { timestamps: true }
);

module.exports = mongooseProposalSchema;
