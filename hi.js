const fs = require("fs")
const rFile = fs.readFile("data.txt",'utf8',(err,data) =>{
    value=data.split("\n");
    console.log(value);
    const sum = value.reduce((total, amount) => total + amount); 
    console.log(sum);
})



