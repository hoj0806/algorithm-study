const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);

let min = 10000
let max = -1
for (let i = 1; i <= n; i++) {
    const [taValue, tbValue] = input[i].split(' ').map(Number);
    min = Math.min(taValue, min)
    max = Math.max(tbValue, max)
}


let answer = 0
for (let i = min - 1; i <= max + 1; i++) {
    let sum = 0
    for (let j = 1; j <= n; j++) {
        let [start, end] = input[j].split(" ").map(Number)
        if (i < start) sum += c
        else if (i > end) sum += h
        else sum += g
    }
    answer = Math.max(answer, sum)
}

console.log(answer)

