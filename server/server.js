// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS

app.use(bodyParser.json());

// Connect to MongoDB (replace 'your-db-uri' with your actual MongoDB URI)
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/api/products', async (req, res) => {
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