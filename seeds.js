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

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
  {
    name: 'Fairy Egglant',
    price: 1,
    category: 'vegetable',
  },
  {
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit',
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit',
  },
  {
    name: 'Organic Celery',
    price: 1.5,
    category: 'vegetable',
  },
  {
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'dairy',
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
