const express = require("express");
const router = express.Router();
const { stockController } = require("../controllers/index");

router.get("/", stockController.fetchStockByUnitId);
router.get("/search", stockController.searchStockByName);
router.post("/", stockController.fetchStockByUnitId);

module.exports = router;
