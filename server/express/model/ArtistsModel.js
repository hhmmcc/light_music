let SqlBase = require("./SqlBase");
class ArtistsModel extends SqlBase{
    constructor(){
        super();
    }
    getAllArtist(callback){
        
        let sql = `select * from artists`;
        this.connection.query(sql,function(err,result){
            if(err){
                console.log("[select ERROR] - ",err.message);
                return ;
            }
            callback(result);
        });
    }
}

module.exports = ArtistsModel;
