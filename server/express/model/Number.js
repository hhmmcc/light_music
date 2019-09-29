let SqlBase = require("./SqlBase");
class Number extends SqlBase{
    constructor(){
        super();
    }
    getNumber(callback){
        
        let sql = `select * from Number`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = Number;
