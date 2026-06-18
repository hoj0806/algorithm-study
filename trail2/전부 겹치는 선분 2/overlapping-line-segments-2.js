const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);


for (let i = 1; i <= n; i++) {
    let max = -Infinity
    let min = Infinity

    for (let j = 1; j <= n; j++) {
        if (i === j) continue
        let [x1, x2] = input[j].split(" ").map(Number)
        max = Math.max(max, x1)
        min = Math.min(min, x2)
    }

    if (min >= max) {
        console.log("Yes")
        return
    }
}

console.log("No")