const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

// Please Write your code here.

let maxX = Math.max(x1, x2, a1, a2)
let minX = Math.min(x1, x2, a1, a2)
let maxY = Math.max(y1, y2, b1, b2)
let minY = Math.min(y1, y2, b1, b2)

let line = Math.max((maxX - minX), (maxY - minY))

console.log(line**2)