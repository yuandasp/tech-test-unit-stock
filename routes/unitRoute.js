const express = require("express");
const router = express.Router();
const { unitController } = require("../controllers/index");

router.get("/", unitController.fetchAllUnit);
router.post("/", unitController.createNewUnit);

module.exports = router;
