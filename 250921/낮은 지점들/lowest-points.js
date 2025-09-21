const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

let map = new Map()

for(let i = 0; i < points.length; i++) {
    let [x, y] = points[i]
    if(map.has(x)) {
        if(map.get(x) > y) {
            map.set(x, y)
        }
    } else {
        map.set(x, y)
    }
}

let sum = 0

for(let [key , value] of map) {
    sum+=value
}

console.log(sum)