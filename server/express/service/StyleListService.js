let StyleListModel = require("../model/StyleListModel");
class StyleListService{
    constructor(){    
    }
    getListDate1(callBack){
        let styleListModel = new StyleListModel();
        styleListModel.getStyleList(function(songlist){
            callBack(songlist);
        });   
    }
}
module.exports = StyleListService;