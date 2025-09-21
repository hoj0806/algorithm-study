const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, x, y] = input[0].split(' ').map(Number);

// Please Write your code here.

let walk = Math.abs(b - a)

let teleport1 = Math.abs(a - x) + Math.abs(y - b)

let teleport2 = Math.abs(a - y) + Math.abs(x - b)

console.log(Math.min(walk, teleport1, teleport2))