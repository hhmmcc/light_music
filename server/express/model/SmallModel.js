let SqlBase = require("./SqlBase");
class SmallModel extends SqlBase{
    constructor(){
        super();
    }
    getAllSmallImag(id,callback){
        
        let sql = `select * from small_img where commodity_id=${id}`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = SmallModel;
