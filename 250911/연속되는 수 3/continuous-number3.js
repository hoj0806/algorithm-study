const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let r = []
let cnt = 0
for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
        cnt++
    } else {
        if(arr[i] > 0) {
            if(arr[i - 1] > 0) {
                cnt++
            } else {
                r.push(cnt)
                cnt = 1
            }
        } else {
            if(arr[i - 1] < 0) {
                cnt++
            } else {
                r.push(cnt)
                cnt = 1
            }
        }
    }
}

r.push(cnt)

console.log(Math.max(...r))