const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = require("../config/env");

exports.register = async (req, res, next) => {
  try {
    const { mobile } = req.body;
    const user = new User({ mobile });
    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { mobile } = req.body;
    const user = await User.findOne({ mobile });
    if (!user) throw new Error("User not found");

    const token = jwt.sign({ mobile }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ success: true, token });
  } catch (err) {
    next(err);
  }
};