const express = require('express')

const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
})



app.post("/",function(req,res){
    console.log(req.body);

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    var result=num1+num2;

    var resultt=num1-num2;

    var resulttt=num1*num2;

    var resultttt=num1/num2;

    res.send("Result after addition  is " + result + "\n" + "Result after subtraction  is " +" "+ resultt +" " + "Result after  multiplication is " +" " +resulttt + " "+"Result after division  is " + resultttt);
   
});
app.listen(3000)