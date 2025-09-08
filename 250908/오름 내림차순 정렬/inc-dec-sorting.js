const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

// Please Write your code here.

let a = nums.slice().sort((a, b) => a - b)
let b = nums.slice().sort((a, b) => b - a)

console.log(a.join(" "))
console.log(b.join(" "))
