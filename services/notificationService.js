const Notification = require("../models/Notification");

async function sendNotification(mobile, message) {
  const notification = new Notification({ mobile, message });
  await notification.save();
  return notification;
}

module.exports = { sendNotification };