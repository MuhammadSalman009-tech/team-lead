const express = require("express");
const { create, getAll, updateConversion } = require("../Controller/lead");
const userAuth = require("../Middleware/userAuth");

const router = express.Router();

router.get("/", getAll);
router.post("/create", create);
router.post("/conversion-status", updateConversion);

module.exports = router;
