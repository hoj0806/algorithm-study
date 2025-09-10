const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.

let r = []
let cnt = 0

for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
        cnt++
    } else {
        
        if(arr[i] === arr[i-1]) {
            cnt++
        } else {
            r.push(cnt)
            cnt = 1
        }
    }
}

r.push(cnt)

console.log(Math.max(...r))