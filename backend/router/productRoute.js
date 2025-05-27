const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

// Routes
router.get("/getAllProducts", productController.getAllProducts);
router.get("/getProductById", productController.getProductById);
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct", productController.updateProduct);
router.delete("/deleteProduct", productController.deleteProduct);

module.exports = router;
