let FindModel = require("../model/FindModel");
class FindService{
    constructor(){    
    }
    getAllData(callBack){
        let findModel = new FindModel();
        findModel.getData(function(data){
            callBack(data);
        });   
    }
}
module.exports = FindService;