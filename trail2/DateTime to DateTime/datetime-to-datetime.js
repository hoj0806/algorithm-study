const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.

let startMinute = (11 * 24 * 60) + (11 * 60) + 11
let finishMinute = (A * 24 * 60) + (B * 60) + C

if (finishMinute < startMinute) {
    console.log(-1)
} else {
    console.log(finishMinute - startMinute)
}