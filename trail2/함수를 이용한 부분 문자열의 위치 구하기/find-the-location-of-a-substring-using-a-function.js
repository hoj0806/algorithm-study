const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.

function solution() {
    for (let i = 0; i < text.length - pattern.length + 1; i++) {
        let s = text.slice(i, i + pattern.length)

        if (s === pattern) return i
    }

    return -1
}

console.log(solution())