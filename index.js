const express = require('express');
const mongoose = require('mongoose');
const route= require('./routers/client/index.router.js');
const app = express();
const port = 3000;


/// set template engines
app.set("views","views");
app.set('view engine', 'pug');

// set static file
app.use(express.static('public'));

// Gọi Route (thay vì ghi thẳng ở file này)
route(app);

// Thiết lập model và kết nối tới mongo
mongoose.connect('mongodb://127.0.0.1:27017/products-study-express-b20');
const Product = mongoose.model('Product', { 
  title: String,
  price: Number,
  thumbnail:String
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});