const router = require("express").Router();
const db = require("../models");

module.exports = function () {
router.get("/", (req, res) => {
  res.render("index", (err, data) => {
      if (err) throw err;
  });
});
}