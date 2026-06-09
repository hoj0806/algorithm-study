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
        for (let j = p; j < p + n; j++) {
            arr[j] += 1
        }

        p += n
    } else {
        for (let j = p - n; j < p; j++) {
            arr[j] += 1
        }

        p -= n
    }
}
let cnt = 0
arr.forEach((i) => {
    if (i >= 2) {
        cnt++
    }
})

console.log(cnt)