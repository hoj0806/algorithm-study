const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.


let sortNums = nums.sort((a, b) => a - b)
let max = -1

for (let i = 0; i < sortNums.length / 2; i++) {
    let z = sortNums[i]
    let y = sortNums[sortNums.length - 1 - i]
    if (z + y > max) max = z + y
}

console.log(max)