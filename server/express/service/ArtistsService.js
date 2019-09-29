let ArtistsModel = require("../model/ArtistsModel");
class ArtistsService{
    constructor(){    
    }
    geArtistDate(callBack){
        let artistsModel = new ArtistsModel();
        artistsModel.getAllArtist(function(songlist){
            callBack(songlist);
        });   
    }
}
module.exports = ArtistsService;