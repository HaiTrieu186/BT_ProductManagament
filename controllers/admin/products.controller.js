const ProductModel=require("../../models/product.model")

module.exports.index= async (req, res) => {
    const products= await ProductModel.find({})

    console.log(products);
    
    res.render("admin/pages/products/index.pug",{
        pageTitle: "Trang danh sách sản phẩm",
        products:products
    });
}