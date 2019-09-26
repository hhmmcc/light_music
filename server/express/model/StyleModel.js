let SqlBase = require("./SqlBase");
class StyleModel extends SqlBase{
    constructor(){
        super();
    }
    getAllStyle(callback){
        
        let sql = `select * from style`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = StyleModel;
