const ProductModel=require("../../models/product.model")
const filterStatusHepler=require("../../helpers/filterStatus")
const searchKeywordHepler=require("../../helpers/searchKeyword")


// [GET] /admin/products
module.exports.index= async (req, res) => {
    const find= {};
    
   
    // set điều kiện status cho find
    const filterStatus=filterStatusHepler(req.query);
    if (req.query.status){
        find.status=req.query.status;
    }


    // tìm kiêm theo keyword (mongoDB cho phép truyền regex)
    const searchedObject=searchKeywordHepler(req.query);
    if (searchedObject.regex){
        find.title=searchedObject.regex;
    }

    const products= await ProductModel.find(find)
    
    res.render("admin/pages/products/index.pug",{
        pageTitle: "Trang danh sách sản phẩm",
        products:products,
        filterStatus:filterStatus,
        keyword:searchedObject.keyword
    });
}