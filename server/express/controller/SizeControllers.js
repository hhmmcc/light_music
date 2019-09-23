
let GxgSizeService = require("../service/GxgSizeService");
module.exports.index = function (req, res) {
    let gxgSizeService = new GxgSizeService();
    gxgSizeService.getSizeDate1(function (obj) {
        res.json(obj);
    });
    
    
};
