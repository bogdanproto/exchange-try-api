const { model } = require('mongoose');
const mongooseNotificationSchema = require('../schema/notification/mongooseNotification');

const Notify = model('notification', mongooseNotificationSchema);

module.exports = Notify;
