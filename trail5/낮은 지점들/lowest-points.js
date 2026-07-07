const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let map = new Map()

for (let i = 0; i < points.length; i++) {
    let [x, y] = points[i]
    map.has(x)
    if (map.has(x)) {
        map.set(x, Math.min(map.get(x), y))
    } else {
        map.set(x, y)
    }
}

let answer = 0

map.forEach((value) => {
    answer += value
})

console.log(answer)