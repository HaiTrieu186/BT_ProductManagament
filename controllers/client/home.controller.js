module.exports.index= (req, res) => {
    res.render("client/pages/home/index.pug",{
        pageTitle: "Trang chủ"
    });
}

module.exports.edit= (req, res) => {
    res.render("client/pages/home/index.pug");
}