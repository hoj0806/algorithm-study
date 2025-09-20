const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1);

// Please Write your code here.


let map = new Map()
let max = 0

for(let i = 0; i < arr.length; i++) {
    let c = arr[i]
    if(map.has(c)) {
        map.set(c, map.get(c) + 1)
    } else {
        map.set(c, 1)
    }   

    if(map.get(c) > max) {
        max = map.get(c)
    }
}

console.log(max)