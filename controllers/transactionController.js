const { processTransaction } = require("../services/transactionService");

exports.sendMoney = async (req, res, next) => {
  try {
    const { fromMobile, toMobile, amount } = req.body;
    const transaction = await processTransaction(fromMobile, toMobile, amount);
    res.json({ success: true, transaction });
  } catch (err) {
    next(err);
  }
};