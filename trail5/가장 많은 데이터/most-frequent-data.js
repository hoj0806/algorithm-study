const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);

// Please Write your code here.


let map = new Map()


for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1)
}

console.log(Math.max(...map.values()))