let express = require("express");
// 获得express对象
let app = express();
// 设置静态文件public文件夹
app.use(express.static('public'));
//3,引入body-parser模块
var bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});


// 跨域代码
app.all('*', (req, res, next) => {
  console.log(123)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Access-Token");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
let port = 8081;
let FindControllers = require("./controller/FindControllers");
app.get('./find',FindControllers.index);

app.listen(`${port}`, function(){
    console.log("监听8081端口的服务器启动");
});