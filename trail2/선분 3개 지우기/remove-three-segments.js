const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let cnt = 0

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let arr = Array(101).fill(0)

            for (let p = 0; p < n; p++) {
                if (p === i || p === j || p === k) continue

                let [start, end] = segments[p]

                for (let k = start; k <= end; k++) {
                    arr[k] += 1
                }
            }

            const maxCount = Math.max(...arr)
            if (maxCount <= 1) cnt++
        }
    }
}

console.log(cnt)