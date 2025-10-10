const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
let arr = input.slice(1).map(i => i.split(" ").map(Number))

console.log(arr)


