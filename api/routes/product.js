const express = require("express");
const router = express.Router();
const productController = require("../controller/product");




router.post("/addProduct",productController.addProduct);
router.get("/getProducts",productController.getProducts);
router.put("/updateProduct",productController.updateProduct);
router.delete("/deleteProduct/:id",productController.deleteProduct);

module.exports = router;
