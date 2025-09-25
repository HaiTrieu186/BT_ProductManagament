const express = require('express');
const route= require('./routers/client/index.route.js');
const app = express();
const database=require("./config/database.js");

require("dotenv").config();
const port = process.env.PORT;

// Kết nối database (MongoDB)
database.connect();

/// set template engines
app.set("views","views");
app.set('view engine', 'pug');

// set static file
app.use(express.static('public'));

// Gọi Route (thay vì ghi thẳng ở file này)
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});