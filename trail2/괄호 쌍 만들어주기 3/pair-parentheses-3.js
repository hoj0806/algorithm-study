const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];

// Please Write your code here.

let cnt = 0

for (let i = 0; i < A.length; i++) {
    let front = A[i]
    for (let j = i + 1; j < A.length; j++) {
        let back = A[j]
        if (front === "(" && back === ")") cnt++
    }
}

console.log(cnt)