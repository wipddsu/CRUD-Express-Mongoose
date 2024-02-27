const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

main().catch((err) => {
  console.log('OH NO MONGO CONNECTION ERROR!!!!');
  console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
  console.log('MONGO CONNECTION OPEN!!!');
}

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
  res.render('products/new');
});

app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  // const { name, price, category } = req.body;
  // Product.insertMany({
  //   name,
  //   price,
  //   category,
  // });
  res.redirect(`/products/${newProduct._id}`);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/detail', { product });
});

app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000');
});
