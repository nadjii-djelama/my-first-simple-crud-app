const Product = require("../models/product.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const findProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateOne = await Product.findByIdAndUpdate(id, req.body);
    if (!updateOne) {
      res.status(404).send({ message: "Product Not Found!" });
    }
    res.status(200).json(updateOne);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productDel = await Product.findByIdAndDelete(id);
    const newList = await Product.find({});
    res.status(200).json(newList);
  } catch (error) {
    res.status(500).json({ message: "No user found" });
  }
};

module.exports = {
  getProducts,
  findProduct,
  updateProduct,
  createProduct,
  deleteProduct
};
