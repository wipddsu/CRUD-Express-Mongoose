const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

main().catch((err) => {
  console.log('OH NO MONGO CONNECTION ERROR!!!!');
  console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('MONGO CONNECTION OPEN!!!');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dogs', (req, res) => {
  res.send('woof');
});

app.listen(3000, () => {
  console.log('APP IS LISTENING ON PORT 3000');
});
