let SqlBase = require("./SqlBase");
class CommodityModel extends SqlBase{
    constructor(){
        super();
    }
    getAllCommodity(callback){
        let sql = `select * from commodity`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = CommodityModel;
