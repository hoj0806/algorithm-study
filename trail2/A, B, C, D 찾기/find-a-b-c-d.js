const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.

let sortArr = arr.sort((a, b) => a - b)
let a = sortArr[0]
let b = sortArr[1]
let c = sortArr[2] 
let d = sortArr[sortArr.length - 1] - a - b - c

console.log(a, b, c, d)