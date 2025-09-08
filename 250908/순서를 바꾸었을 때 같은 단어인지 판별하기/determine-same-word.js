const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.

let a = str1.split("").sort().join("")
let b = str2.split("").sort().join("")


console.log(a === b ? "Yes" : "No")