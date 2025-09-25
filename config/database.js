const mongoose = require('mongoose');

module.exports.connect= async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/products-study-express-b20');        
        console.log("Kết nối mongoDB thành công");
    } catch (error) {
        console.log("Kết nối mongoDB thất bại: "+ error);
    }
}

