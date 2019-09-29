
let MemberService = require("../service/MemberService");
module.exports.index = function (req, res) {
    let memberService = new MemberService();
    memberService.getMemberdata(function (obj) {
        res.json(obj);
    }); 
};
