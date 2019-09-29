let SqlBase = require("./SqlBase");
class SongStyleModel extends SqlBase{
    constructor(){
        super();
    }
    getSongStyle(id, callback){
        
        let sql = `select * from song_style where style_id=${id}`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}
module.exports = SongStyleModel;