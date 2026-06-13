const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].trim().split(' ').map(Number);

// Please Write your code here.

let total = arr.reduce((a, c) => a + c, 0)

let minDiff = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 6; i++) {

    for (let j = 0; j < 6; j++) {
        for (let k = 0; k < 6; k++) {
            if (i !== j && j !== k && i !== k) {
                let z = total - (arr[i] + arr[j] + arr[k])
                minDiff = Math.min(minDiff,(Math.abs((z - (arr[i] + arr[j] + arr[k])))))
            }
        }
    }

}

console.log(minDiff)