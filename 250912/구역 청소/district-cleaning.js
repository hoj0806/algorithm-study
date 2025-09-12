const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

// Please Write your code here.

if(b < c || d < a) {
    let x = b - a
    let y = d - c
    console.log(x + y)
} else {
    let max = Math.max(...[a, b, c, d])
    let min = Math.min(...[a, b, c, d])
    console.log(max - min)
}