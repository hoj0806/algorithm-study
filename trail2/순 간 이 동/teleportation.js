const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

// Please Write your code here.


let case1 = Math.abs(b - a)
let case2 = Math.abs(x - a) + Math.abs(b - y)
let case3 = Math.abs(a - y) + Math.abs(b - x)

console.log(Math.min(case1, case2, case3))