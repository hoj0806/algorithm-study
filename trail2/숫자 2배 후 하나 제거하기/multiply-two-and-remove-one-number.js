const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

let min = Infinity;

for (let i = 0; i < n; i++) {
    let z = arr[i] * 2

    for (let j = 0; j < n; j++) {
        if (i === j) continue
        let arr2 = []
        let sum = 0

        for (let k = 0; k < n; k++) {
            if (k === i) arr2.push(z)
            else if (k === j) continue
            else arr2.push(arr[k])
        }

        for (let p = 0; p < arr2.length - 1; p++) {
            sum += Math.abs(arr2[p] - arr2[p + 1])
        }

        min = Math.min(sum ,min)
    }
}

console.log(min)