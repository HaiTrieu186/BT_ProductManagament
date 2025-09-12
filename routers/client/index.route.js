const productsRouter= require('./products.route.js')
const homeRouter= require('./home.route.js')

module.exports = (app)=>{
    

    // giả sử sau này có nhiều route có chung vd /products/../../ thì rất dài --> tách file riêng
    // app.get('/', (req, res) => {
    // console.log("Đã vào trang chủ hihi");
    // res.render("client/pages/home/index.pug");
    // })
    // app.get('/products', async (req, res) => {
    //     res.render("client/pages/products/index.pug");
    // })
    // .......

    app.use('/',homeRouter);
    app.use('/products',productsRouter);
}