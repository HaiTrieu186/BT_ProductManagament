const systemConfig=require("../../config/system");
const dashBoardRoute=require("./dashboard.route");
const productsRoute=require("./products.route");

module.exports = (app)=>{
    const AdminPath=systemConfig.ADMIN_PATH;

    app.use(AdminPath + '/dashboard',dashBoardRoute);
    app.use(AdminPath + '/products',productsRoute);
}