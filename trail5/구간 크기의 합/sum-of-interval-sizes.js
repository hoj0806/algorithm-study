const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    arr.push([x, 1, i])
    arr.push([y, -1, i])
}

arr.sort((a, b) => a[0] - b[0])

let set = new Set()

let sum = 0
let start = 0
let end = 0

for (let i = 0; i < arr.length; i++) {
    let [x, y, index] = arr[i]
    if (y === 1) {
        if (set.size === 0) {
            start = x
        }
        set.add(index)
    } else if (y === -1) {
        set.delete(index)
        if (set.size === 0) {
            end = x
            let dist = end - start
            sum += dist
        }
    }
}

console.log(sum)