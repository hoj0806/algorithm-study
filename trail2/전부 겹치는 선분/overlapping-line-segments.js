const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);

let max = 0
let min = Infinity

for (let i = 1; i <= n; i++) {
    let [x1, x2] = input[i].split(" ").map(Number)
    max = Math.max(max, x1)
    min = Math.min(min, x2)
}


if (min >= max) {
    console.log("Yes")
} else {
    console.log("No")
}

