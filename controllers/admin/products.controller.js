const ProductModel=require("../../models/product.model")

// [GET] /admin/products
module.exports.index= async (req, res) => {
    const find= {};
    let keyword="";
    const filterStatus=[
        {
            name:"Tất cả",
            status:"",
            class: "",       
        },
        {
            name:"Hoạt động",
            status:"active",
            class: "",       
        },
        {
            name:"Dừng hoạt động",
            status:"inactive",
            class: "",       
        }
    ]

    // thay đổi class active cho phù hợp với url params
    if (req.query.status){
        const index=filterStatus.findIndex(item => item.status===req.query.status);
        filterStatus[index].class="active";
    } else {
    const index=filterStatus.findIndex(item => item.status==="");
        filterStatus[index].class="active";
    }


    // set điều kiện status cho find
    if (req.query.status){
        find.status=req.query.status;
    }


    // tìm kiêm theo keyword (mongoDB cho phép truyền regex)
    if (req.query.keyword){
        keyword=req.query.keyword
        const regex= new RegExp(keyword,"i")
        find.title=regex;
    }

    // if (req.query.status){
    //     const statusURL= req.query.status
    //     /// set active cho nút filter status
    //     filterStatus.forEach(status => {
    //         if (status.status !== statusURL)
    //             status.class="";
    //         else
    //             status.class="active"; 
    //     //////////////////////////////////////
    //
    //     ///// thêm status đẻ lấy data tương ứng
    //     find.status= statusURL;
    //     /////////////////////////////////////// 
    //
    //     })
    // } else {
    //     filterStatus[0].class="active"
    // }
        

    const products= await ProductModel.find(find)
    
    res.render("admin/pages/products/index.pug",{
        pageTitle: "Trang danh sách sản phẩm",
        products:products,
        filterStatus:filterStatus,
        keyword:keyword
    });
}