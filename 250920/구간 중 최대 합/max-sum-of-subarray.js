const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let max = Number.MIN_SAFE_INTEGER

for(let i = 0; i < arr.length - k + 1; i++) {
    let n = arr[i]
    for(let j = (i + 1); j < i + k; j++) {
        n += arr[j]
    }
    if(n > max) {
        max = n
    }
}

console.log(max)