
let FindService = require("../service/FindService");
module.exports.index = function (req, res) {
    let findService = new FindService();
    findService.getAllData(function (obj) {
        res.json(obj);
    });
};
