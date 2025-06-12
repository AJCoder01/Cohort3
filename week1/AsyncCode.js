const fs = require("fs");

function print(err,data){
  if(err){
    console.log("Error! File is not found")
  }
  else{
    console.log(data);
  }
  
}
fs.readFile("a.txt","utf-8",print); //  just readFile reads asynchronously
fs.readFile("b.txt","utf-8",print); // read synchronously


console.log("hello!");

