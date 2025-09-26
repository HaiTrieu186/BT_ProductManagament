const ProductModel=require("../../models/product.model")

module.exports.index= async (req, res) => {
    const find= {};
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
    //  
    //     })
    // } else {
    //     filterStatus[0].class="active"
    // }
        

    const products= await ProductModel.find(find)
    
    res.render("admin/pages/products/index.pug",{
        pageTitle: "Trang danh sách sản phẩm",
        products:products,
        filterStatus:filterStatus
    });
}