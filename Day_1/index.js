// console.log("This is my first node js program")

// fs module-prefined module (Core module)
// const data=require("fs")
// data.writeFileSync("abc.txt","hello how are you")
// const readData=data.readFileSync("abc.txt","utf-8")
// console.log(readData)

// local module 
// function sum(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// module.exports={
//     sum,sub
// }

// Third Party Module 
const data=require("chalk")
console.log(data.green("Hello how are you"))
console.log(data.blue("Hello how are you"))