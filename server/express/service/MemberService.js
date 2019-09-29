let Member = require("../model/Member");
let Number = require("../model/Number");
class MemberService{
    constructor(){    
    }
    getMemberdata(callback){
        let member = new Member();
        member.getMember(function(member){
            let number = new Number();
            number.getNumber(function(number){
                callback({member:member,number:number})
            })
        });   
    }
}
module.exports = MemberService;