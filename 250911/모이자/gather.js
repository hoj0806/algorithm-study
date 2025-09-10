const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let min = Number.MAX_SAFE_INTEGER

for(let i = 0; i < arr.length; i++) {
    let sum = 0
    for(let j = 0; j < arr.length; j++) {
        let d = (i+1)
        if(i !== j) {
            sum = sum + (Math.abs(d - (j + 1)) * arr[j])
        }
    }
    if(sum < min) {
        min = sum
    }
}

console.log(min)