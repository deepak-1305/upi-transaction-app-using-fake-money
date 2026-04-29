const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobile: { type: String, unique: true, required: true },
  balance: { type: Number, default: 10000 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);