const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  fromMobile: String,
  toMobile: String,
  amount: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);