const express = require("express");
const { notify } = require("../controllers/notificationController");
const router = express.Router();

router.post("/send", notify);

module.exports = router;