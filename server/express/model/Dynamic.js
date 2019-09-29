let SqlBase = require("./SqlBase");
class Dynamic extends SqlBase{
    constructor(){
        super();
    }
    getDynamic(callback){
        
        let sql = `select * from Dynamic`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}
module.exports = Dynamic;