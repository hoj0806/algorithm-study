const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let set = new Set()

for(let i = 0; i < arr.length; i++) {
    set.add(arr[i])
}

console.log(set.size)