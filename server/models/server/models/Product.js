js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  seller: String
});

module.exports = mongoose.model('Product', ProductSchema);
```
