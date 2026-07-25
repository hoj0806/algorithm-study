const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[0].split(' ').map(Number);
// Please Write your code here.

let s = numbers.sort((a, b) => a - b)
let len = s.length - 1

let abcd = s[len]
let a = s[0]
let b = s[1]
let c = 0
if (a + b === s[2]) {
    c = s[3]
} else {
    c = s[2]
}

let d = abcd - a - b - c

console.log(a, b, c, d)