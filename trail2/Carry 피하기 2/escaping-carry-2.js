const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let max = -1;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        for (let k = 0; k < n; k++) {
            if (i !== j && j !== k && i !== k) {
                let a1 = String(arr[i]).split("").map(Number)
                let a2 = String(arr[j]).split("").map(Number)
                let a3 = String(arr[k]).split("").map(Number)
                let maxLength = Math.max(a1.length, a2.length, a3.length)

                for (let i = 1; i < maxLength; i++) {
                    if (a1.length < maxLength) {
                        a1.unshift(0)
                    }

                    if (a2.length < maxLength) {
                        a2.unshift(0)
                    }

                    if (a3.length < maxLength) {
                        a3.unshift(0)
                    }
                }
                let carry = false
                for (let i = 0; i < maxLength; i++) {
                    let sum = a1[i] + a2[i] + a3[i]
                    if (sum >= 10) {
                        carry = true
                        break
                    }
                }
                if (!carry) {
                    max = Math.max(max, arr[i] + arr[j] + arr[k])
                }
            }
        }
    }
}

console.log(max)