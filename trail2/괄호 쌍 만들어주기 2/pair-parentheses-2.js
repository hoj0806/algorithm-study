const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.


let cnt = 0

for (let i = 0; i < A.length; i++) {
    let x = A[i]
    for (let j = i + 1; j < A.length; j++) {
        let y = A[j]
        for (let k = j + 1; k < A.length; k++) {
            let z = A[k]
            for (let l = k + 1; l < A.length; l++) {
                let p = A[l]
                if (x === "(" && y === "(" && z === ")" && p === ")" && j - i === 1 && l - k === 1) cnt++
                
            }
        }
    }
}

console.log(cnt)