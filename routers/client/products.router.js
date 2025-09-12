const express = require('express');
const router=express.Router();


router.get('/', (req, res) => {
    res.render("client/pages/products/index.pug");
})

router.get('/edit', (req, res) => {
    res.render("client/pages/products/index.pug");
})

router.get('/create',(req, res) => {
    res.render("client/pages/products/index.pug");
})

// Giả sử muốn
// /products
// /products/edit
// /products/create

// nếu ghi cái get lớn nhất là /prodcuts ở đây lun thì ở file index.router.js là như này 
// products/products
// products/products/edit
// products/products/create
// do ở index.route.js khai báo route /products r ms gọi cái file này --> dùng '/' ở đây

module.exports= router