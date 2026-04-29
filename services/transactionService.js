const User = require("../models/User");
const Transaction = require("../models/Transaction");

async function processTransaction(fromMobile, toMobile, amount) {
  const sender = await User.findOne({ mobile: fromMobile });
  const receiver = await User.findOne({ mobile: toMobile });

  if (!sender || !receiver) throw new Error("User not found");
  if (sender.balance < amount) throw new Error("Insufficient balance");

  sender.balance -= amount;
  receiver.balance += amount;

  await sender.save();
  await receiver.save();

  const transaction = new Transaction({ fromMobile, toMobile, amount });
  await transaction.save();

  return transaction;
}

module.exports = { processTransaction };