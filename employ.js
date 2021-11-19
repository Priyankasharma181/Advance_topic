const fs = require("fs");
const readline = require("readline-sync")
const readFile = fs.readFileSync("employ.json");
const convertedData = JSON.parse(readFile)
var surName = readline.question("enter the surname")
const filterArray= convertedData.filter(checkUser=>checkUser.username.includes(surName))
console.log(filterArray);