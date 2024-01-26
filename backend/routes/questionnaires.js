const express = require("express");
const router = express.Router();
const db = require("../../database/questionnaires");

router.get("/", (req, res) => {
  res.json(db);
});

module.exports = router;
