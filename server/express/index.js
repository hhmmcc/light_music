let express = require("express");
// 获得express对象
let app = express();
//3,引入body-parser模块
var bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//3,设置跨域访问
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


let MemberControllers = require("./controller/MemberControllers");
app.get('/member',MemberControllers.index);
let DynamicControllers = require("./controller/DynamicControllers");
app.get('/dynamic',DynamicControllers.index);

let IndexControllers = require("./controller/IndexControllers");
app.get('/style',IndexControllers.index);

let StyleListControllers = require("./controller/StyleListControllers");
app.get('/stylelist',StyleListControllers.index);

let ArtistsControllers = require("./controller/ArtistsControllers");
app.get('/artists',ArtistsControllers.index);


let FindControllers = require("./controller/FindControllers");
app.get('/find',FindControllers.index);

app.listen(8081, function(){
    console.log("监听8081端口的服务器已启动");
});

