let Dynamic = require("../model/Dynamic");
class DynamicService{
    constructor(){    
    }
    getDynamicdata(callback){
        let dynamic = new Dynamic();
        dynamic.getDynamic(function(dynamic){
            callback(dynamic)
        });   
    }
}
module.exports = DynamicService;