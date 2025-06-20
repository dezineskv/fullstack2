const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.post("/createproduct", productController.createProduct);
router.get("/products", productController.getAllProducts);
router.get("/products/:id", productController.getSingleProduct);
router.delete("/products/delete/:id", productController.deleteProduct);
router.put("/products/:id", productController.updateProduct);
router.post("/products/bulkproduct", productController.createBulkProduct);

module.exports = router;
