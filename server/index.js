js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const Product = require('./models/Product');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API do marketplace rodando!'));

app.get('/api/products', async (req, res) => {
  const products = await Product.find(); res.json(products);
});

app.post('/api/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
```
