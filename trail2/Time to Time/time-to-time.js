const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.


let currentTime = (a * 60) + b
let finishTime = (c * 60) + d

console.log(finishTime - currentTime)