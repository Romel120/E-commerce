// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST add product
router.post('/', async (req, res) => {
  try {
    console.log('Received product data:', req.body);

    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    console.log('Saved product:', savedProduct);

    res.json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
