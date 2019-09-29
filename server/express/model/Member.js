let SqlBase = require("./SqlBase");
class Member extends SqlBase{
    constructor(){
        super();
    }
    getMember(callback){
        
        let sql = `select * from Member`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}
module.exports = Member;