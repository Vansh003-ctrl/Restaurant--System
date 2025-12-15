const { get } = require('mongoose');
const productModel = require('../models/product.model');

// Create a new product
async function createProduct(req, res) {
  const {title, description, price:{amount, currency}} = (req.body);
  try {
    const product = await productModel({
      title,
      description,
      price: {
        amount,
        currency
      }
    });
  
    await product.save();
    res.status(201).json({
      message: "Product created successfully",
      product
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Something went wrong",
      error: error.message });
  }
}

async function getProduct(req, res) {
  try {
    const product = await productModel.findOne();
    res.status(200).json({ 
      message: "Product fetched successfully",
      product });
  } catch (error) {
    res.status(500).json({ 
      message: "Something went wrong",
      error: error.message });
  }
}

module.exports = {
  createProduct,
  getProduct
};