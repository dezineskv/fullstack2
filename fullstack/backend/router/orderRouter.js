const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.post("/createorder", orderController.createOrder);
router.get("/orders", orderController.getAllOrders);

module.exports = router;
