let DynamicService = require("../service/DynamicService");
module.exports.index = function (req, res) {
    let dynamicService = new DynamicService();
    dynamicService.getDynamicdata(function (obj) {
        res.json(obj);
    }); 
};