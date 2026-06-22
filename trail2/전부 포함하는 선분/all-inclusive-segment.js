const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let answer = Infinity

for (let i = 1; i <= n; i++) {
    let min = Infinity
    let max = -Infinity

    for (let j = 1; j <= n; j++) {
        if (i === j) continue
        let [start, end] = input[j].split(" ").map(Number)
        min = Math.min(min, start)
        max = Math.max(max, end)
    }

    answer = Math.min(answer, max - min)
}

console.log(answer)
