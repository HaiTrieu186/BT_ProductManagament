module.exports=(query)=>{
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
    if (query.status){
        const index=filterStatus.findIndex(item => item.status===query.status);
        filterStatus[index].class="active";
    } else {
    const index=filterStatus.findIndex(item => item.status==="");
        filterStatus[index].class="active";
    }

    return filterStatus;
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