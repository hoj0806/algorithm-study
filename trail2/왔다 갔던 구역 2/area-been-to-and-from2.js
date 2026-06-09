const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

let arr = Array(20001).fill(0)

let p = 10000

for (let i = 0; i < commands.length; i++) {
    let [n, c] = commands[i].split(" ")
    n = Number(n)
    if (c === "R") {
        arr[p] += 1
        arr[p + n] -= 1
        p += n
    } else {
        arr[p - n] += 1
        arr[p] -= 1
        p -= n
    }
}

let currentOverlap = 0;
let cnt = 0
for (let i = 0; i < arr.length; i++) {
    currentOverlap += arr[i]
    if (currentOverlap >= 2 ) {
        cnt++
    }
}

console.log(cnt)