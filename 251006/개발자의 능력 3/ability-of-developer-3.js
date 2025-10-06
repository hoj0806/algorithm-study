const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.


let sum = arr.reduce((a, c) => a + c, 0)
let len = arr.length
let min = Infinity

for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
        for(let k = j + 1; k < len; k++) {
            let p = arr[i] + arr[j] + arr[k]
           min = Math.min(min, Math.abs((sum - p) - p))
        }
    }
}

console.log(min)