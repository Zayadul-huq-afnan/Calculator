
const express = require("express");
const bodyParser =  require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.get("/" , function(req, res){

    res.sendFile(__dirname + "/index.html");
   
})


app.get("/bmicalculator" , function(req, res){

    res.sendFile(__dirname + "/bmiCalculator.html");
})


app.post("/" , function(req,res){

    var num1 = req.body.value1;
    var num2 = req.body.value2;

    var result = Number(num1) + Number(num2);
    console.log(result);
    res.send("Result: " + result);
})

app.post("/bmicalculator" , function(req,res){

    var num1 = req.body.height;
    var num2 = req.body.weight;

    var result = num1 * num2;
    console.log(result);
    res.send("BMI: " + result);
})
app.listen(4000 , function(){
    console.log("server up at 3000");
})

