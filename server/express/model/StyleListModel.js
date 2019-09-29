let SqlBase = require("./SqlBase");
class StyleListModel extends SqlBase{
    constructor(){
        super();
    }
    getStyleList(callback,id,num){
        let sql;
        if(num==1){
             sql = `select * from style_list where songstyle_id=${id}`;
        }else{
             sql = `select * from style_list`;
        }
        
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = StyleListModel;
