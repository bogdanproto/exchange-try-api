const { Schema } = require('mongoose');

const mongooseNotificationSchema = new Schema(
  {
    initiator: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Initiator is required'],
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Recipient is required'],
    },
    typeNotify: {
      type: String,
      required: [true, 'Type of notification is required'],
      enum: ['customer_offer', 'customer_update', 'customer_remove'],
    },
    source: {
      type: Schema.Types.ObjectId,
      ref: 'proposal',
      required: [true, 'Basis for notification is required'],
    },
    statusNotify: {
      type: String,
      required: [true, 'Status of notification is required'],
      enum: ['viewed', 'notviewed'],
      default: 'notviewed',
    },
  },
  { timestamps: true }
);

module.exports = mongooseNotificationSchema;
