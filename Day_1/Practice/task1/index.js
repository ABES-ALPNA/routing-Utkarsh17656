const data = require("fs")
data.writeFileSync("hello.txt","Hello Node.js")
const readData=data.readFileSync("hello.txt","utf-8")
data.appendFile("hello.txt","Practice makes perfect",(err)=>{
    if(err){
        console.error("Error while appending:",err)
    }
    else{
        console.log("File appended successfully ")
            data.readFileSync("hello.txt","utf-8")
    }
});
console.log(readData)