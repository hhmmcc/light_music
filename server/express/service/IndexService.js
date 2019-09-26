
let StyleListModel = require("../model/StyleListModel");
let StyleModel = require("../model/StyleModel");
let SongStyleModel = require("../model/SongStyleModel");
class GetTopicContent{
    constructor(){}
    getData(callBack){
     let  styleModel  = new StyleModel();
     let  songStyleModel = new SongStyleModel();
     let  styleListModel = new StyleListModel();
            styleModel.getAllStyle(function(style){
                let length = style.length;
                for(let i = 0; i<length; i++){
                    let id = style[i].id;
                    songStyleModel.getSongStyle(id,function(songStyle){
                        style[i].songStyle = songStyle;
                        let length2 = songStyle.length;
                        for(let j = 0; j<length2; j++){
                            let id2 = songStyle[j].id;
                            styleListModel.getStyleList(id2, function(styleList){
                                songStyle[j].styleList = styleList;
                                if(j==length2-1){
                                    style[i].songStyle = songStyle;
                                    if(i==length-1){
                                        callBack(style);
                                    }
                                }
                            });
                        }
                    });
                }
                

            });
        
    }
}

module.exports = GetTopicContent;