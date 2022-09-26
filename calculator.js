const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);
  var sol = num1 + num2;

  response.send(sol);
});

app.get("/bmicalculator", function(request, response){
  response.sendFile(__dirname + "/bmicalculator.html");

});

app.post("/bmicalculator", function(request, response){
  var num1 = Number(request.body.height);
  var num2 = Number(request.body.weight);
  var sol = num1 + num2;

  response.send(sol);s
});

app.listen(3000,function(){
  console.log("server is running");
});
