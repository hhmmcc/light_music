let SqlBase = require("./SqlBase");
class SizeModel extends SqlBase{
    constructor(){
        super();
    }
    getSize(callback){
        
        let sql = `select * from size_table`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}
module.exports = SizeModel;