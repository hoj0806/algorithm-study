const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

// Please Write your code here.

if (b < c || d < a) {
    console.log((b - a) + (d - c))
} else {
    console.log(Math.max(a, b, c, d) - Math.min(a, b, c, d))
}