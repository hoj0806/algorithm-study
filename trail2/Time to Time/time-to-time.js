const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.


let hour = c - a
let minute = d - b

console.log((hour * 60) + minute)