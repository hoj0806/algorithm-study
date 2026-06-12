const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let max = -1

for (let i = 0; i < n - 2; i++) {
    for(let j = i +  2; j < n; j++) {
        max = Math.max(max , arr[i] + arr[j])
    }
}

console.log(max)