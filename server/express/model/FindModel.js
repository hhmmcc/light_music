let SqlBase = require("./SqlBase");
class FindModel extends SqlBase{
    constructor(){
        super();
    }
    getAllFind(callback){
        
        let sql = `select * from finding`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = FindModel;
