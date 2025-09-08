const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.

let strA = a.sort().join("")
let strB = b.sort().join("")

console.log(strA === strB ? "Yes" : "No")