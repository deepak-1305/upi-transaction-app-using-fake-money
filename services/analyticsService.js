const Transaction = require("../models/Transaction");
const User = require("../models/User");

async function getStats() {
  const totalTransactions = await Transaction.countDocuments();
  const totalUsers = await User.countDocuments();
  const totalVolume = await Transaction.aggregate([
    { $group: { _id: null, sum: { $sum: "$amount" } } }
  ]);

  return {
    totalUsers,
    totalTransactions,
    totalVolume: totalVolume[0]?.sum || 0
  };
}

module.exports = { getStats };