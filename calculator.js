const express=require('express');

const bodyParser=require('body-parser');



const app=express();

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(__dirname + '/index.html'));


app.use(express.static(__dirname + '/public'));


app.get('/',function(request,response)
{
    response.sendFile(__dirname + "/index.html");
})




app.post("/",function(request,response)
{

    var num1=Number(request.body.num1);
    var num2=Number(request.body.num2);
    var result=num1+num2;
    var result2=num1-num2;
    var result3=num1*num2;
    var result4=num1/num2;
    response.send("The result of Addition is " + result + "</br>"+ "The result of Subtraction is " + result2+ "</br>" +"The result of Multiplication is " + result3 + "</br>" + "The result of Division is " + result4);
    
})


app.listen(3000,function()
{
    console.log("Server is Live on port 3000");
})
