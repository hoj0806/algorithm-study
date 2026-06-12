const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let l = arr.length
let cnt = 0

for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
        for (let k = j + 1; k < l; k++) {
            if (arr[i] <= arr[j] && arr[j] <= arr[k]) cnt++
        }
    }
}

console.log(cnt)