const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const values = input[0].trim().split(' ').map(Number);
// Please Write your code here.

values.sort((a, b) => b - a)

let a = values[values.length - 1]
let b = values[values.length - 2]
let c = values[0] - a - b

console.log(a, b, c)