const { Schema } = require('mongoose');

const mongooseProposalSchema = new Schema({
  owner: {
    type: {
      id_owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Owner is required'],
      },
      equipment: {
        type: [Schema.Types.ObjectId],
        ref: 'user_equipment',
        required: [true, 'Set as min one equipment'],
      },
      spot: {
        type: Schema.Types.ObjectId,
        ref: 'spot',
        required: [true, 'Spot is required'],
      },
      date: {
        type: Date,
        required: [true, 'Date is required'],
      },
      time: {
        type: String,
        required: [true, 'Time is required'],
      },
      owner_msg: {
        type: String,
        default: null,
      },
      is_show_phone: {
        type: Boolean,
        default: false,
      },
      is_auto_accept: {
        type: Boolean,
        default: false,
      },
    },
    required: [true, 'Owner is required'],
  },

  customer: {
    type: {
      id_customer: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Customer is required'],
      },
      equipment: {
        type: [Schema.Types.ObjectId],
        ref: 'user_equipment',
        required: [true, 'Set as min one equipment'],
      },

      time: {
        type: String,
        default: null,
      },
      customer_msg: {
        type: String,
        default: null,
      },
    },
    default: {
      id_customer: null,
      equipment: [],
      time: null,
      customer_msg: null,
    },
  },

  is_accepted: {
    type: String,
    default: 'pending',
    enum: ['pending', 'accepted', 'rejected'],
  },
});

module.exports = mongooseProposalSchema;
