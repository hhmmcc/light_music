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
let IndexControllers = require("./controller/IndexControllers");
app.get('/main',IndexControllers.index);

let SizeControllers = require("./controller/SizeControllers");
app.get('/gxg',SizeControllers.index);

app.listen(8081, function(){
    console.log("监听8081端口的服务器已启动");
});