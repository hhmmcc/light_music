let SqlBase = require("./SqlBase");
class StyleListModel extends SqlBase{
    constructor(){
        super();
    }
    getStyleList(id, callback){
        let sql = `select * from style_list where songstyle_id=${id}`;
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
