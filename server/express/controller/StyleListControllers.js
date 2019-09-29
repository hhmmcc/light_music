
let StyleListService = require("../service/StyleListService");
module.exports.index = function (req, res) {
    let styleListService = new StyleListService();
    styleListService.getListDate1(function (obj) {
        res.json(obj);
    });
    
    
};
