const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let min = Infinity

for (let i = 0; i <= 100; i += 2) {
    for (let k = 0; k <= 100; k += 2) {
        let arr = [0, 0, 0, 0]
        for (let j = 0; j < n; j++) {
            let [x, y] = points[j]
            if (x > i && y > k) {
                arr[0] += 1
            } else if (x > i && y < k) {
                arr[1] += 1
            } else if (x < i && y > k) {
                arr[2] += 1
            } else if (x < i && y < k) {
                arr[3] += 1
            }
        }
        min = Math.min(min, Math.max(...arr))
    }

}

console.log(min)