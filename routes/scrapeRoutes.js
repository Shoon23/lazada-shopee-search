const express = require("express");
const router = express.Router();
const { searchProduct } = require("../controller/scrapeController");

router.get("/", searchProduct);

module.exports = router;
