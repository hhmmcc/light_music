
let CommodityModel = require("../model/CommodityModel");
let SmallModel = require("../model/SmallModel");
class GetTopicContent{
    constructor(){}
    getData(callBack){
     let   smallModel  = new SmallModel();
     new CommodityModel().getAllCommodity(function(commodity){
        let arrCommodity = commodity;
        let length = arrCommodity.length;
        for(let i = 0; i<length; i++){
            let id = arrCommodity[i].id;
            smallModel.getAllSmallImag(id,function(imgs){
                arrCommodity[i].imgs = imgs;
                if(i == length-1){
                    callBack(arrCommodity);
                }       
            });
        }

     });
    }
}

module.exports = GetTopicContent;