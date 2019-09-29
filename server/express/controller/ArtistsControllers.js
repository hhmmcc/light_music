
let ArtistsService = require("../service/ArtistsService");
module.exports.index = function (req, res) {
    let artistsService = new ArtistsService();
    artistsService.geArtistDate(function (obj) {
        res.json(obj);
    });
    
    
};
