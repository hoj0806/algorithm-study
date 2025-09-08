const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let answer = ''
for(let i = 0; i < arr.length; i++) {
    if((i+1) % 2 !== 0) {
        let slice = arr.slice(0, i + 1).sort((a, b) => a - b)
        answer += slice[Math.floor(slice.length / 2)] + " "
    }
}

console.log(answer)