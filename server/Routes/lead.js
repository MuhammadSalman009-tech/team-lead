const express = require("express");
const {
  create,
  updateConversion,
  updateBroadCast,
  getAllLeads,
  getAllBroadCatedLeads,
} = require("../Controller/lead");
const userAuth = require("../Middleware/userAuth");

const router = express.Router();

router.post("/", userAuth, getAllLeads);
router.get("/broadcasted", getAllBroadCatedLeads);
router.post("/create", userAuth, create);
router.post("/conversion-status/:id", updateConversion);
router.post("/broadcast-status/:id", updateBroadCast);

module.exports = router;
