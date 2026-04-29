const { sendNotification } = require("../services/notificationService");

exports.notify = async (req, res, next) => {
  try {
    const { mobile, message } = req.body;
    if (!mobile || !message) {
      return res.status(400).json({ success: false, error: "Mobile and message required" });
    }
    const notification = await sendNotification(mobile, message);
    res.json({ success: true, notification });
  } catch (err) {
    next(err);
  }
};