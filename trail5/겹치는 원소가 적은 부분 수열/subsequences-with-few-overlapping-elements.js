const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let hash = new Map()

let j = 0
let max = 0

for (let i = 0; i < n; i++) {
    while (j < n) {
        let count = hash.get(arr[j]) || 0
        if (count === k) break

        hash.set(arr[j], count + 1)
        j++
    }

    max = Math.max(max, j - i)
    if (hash.get(arr[i]) === 1) {
        hash.delete(arr[i])
    } else {
        hash.set(arr[i], hash.get(arr[i]) - 1)
    }
}

console.log(max)