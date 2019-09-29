let FindModel = require("../model/FindModel");
class FindService{
    constructor(){    
    }
    geFindtDate(callBack){
        let findModel = new FindModel();
        findModel.getAllFind(function(songlist){
            callBack(songlist);
        });   
    }
}
module.exports = FindService;