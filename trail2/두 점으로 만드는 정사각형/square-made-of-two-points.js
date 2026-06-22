const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// Please Write your code here.

let x = Math.max(x2, a2) - Math.min(x1, a1)
let y = Math.max(y2, b2) - Math.min(y1, b1)
let maxLength = Math.max(x, y)
console.log(maxLength **2)
