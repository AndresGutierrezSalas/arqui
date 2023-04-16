const express = require("express");
const router = express.Router();
const agenda = require("../services/agenda");

/* GET agenda. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await agenda.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting agenda `, err.message);
    next(err);
  }
});

/* POST agenda */
router.post("/", async function (req, res, next) {
  try {
    res.json(await agenda.create(req.body));
  } catch (err) {
    console.error(`Error while creating appointment`, err.message);
    next(err);
  }
});

module.exports = router;
