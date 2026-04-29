const express = require("express");
const { sendMoney } = require("../controllers/transactionController");
const router = express.Router();

router.post("/send", sendMoney);

module.exports = router;