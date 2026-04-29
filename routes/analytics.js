const express = require("express");
const { analytics } = require("../controllers/analyticsController");
const router = express.Router();

router.get("/", analytics);

module.exports = router;