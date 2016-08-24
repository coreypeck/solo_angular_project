// var express = require("express");
// var app = express();
// var bodyParser = require('body-parser');
// var path = require('path');
// var thing = require('./routes/thing');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());
//
// app.use('/public', express.static(path.join(__dirname, './public')));
//
// app.use('/thing', thing);
//
// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname, "./public/views/index.html"));
// });
//
// app.set('port', 3000)
//
// app.listen(process.env.PORT || app.get('port'), function (){
//   console.log("Listening at port", app.get('port'));
// });
var express =require("express");
var app = express();
var path = require("path");

app.set("port", (process.env.PORT || 5000));

app.get("/*", function(req, res){
  console.log(req.params[0]);
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "public", file));
})

app.listen(app.get("port"), function(){
  console.log("Listening on Port:", app.get("port"));
});
