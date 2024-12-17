const express = require("express");
const Product = require("../models/product.model");
const router = express.Router()
const {getProducts, findProduct, updateProduct, createProduct, deleteProduct} = require('../controllers/products')

router.get("/", getProducts)
router.get("/api/products/:id", findProduct)
router.put("/api/products/:id", updateProduct)
router.post("/api/products/create", createProduct)
router.delete('/api/products/delete/:id', deleteProduct)

module.exports = router;