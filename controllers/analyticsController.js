const { getStats } = require("../services/analyticsService");

exports.analytics = async (req, res, next) => {
  try {
    const stats = await getStats();
    res.json({ success: true, stats });
  } catch (err) {
    next(err);
  }
};