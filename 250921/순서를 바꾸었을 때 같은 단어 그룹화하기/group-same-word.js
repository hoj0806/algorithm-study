const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.

let map = new Map()
let max = 0
for(let i = 0; i < words.length; i++) {
    let w = words[i]
    let sW = w.split("").sort().join("")
    if(map.has(sW)) {
        map.set(sW, map.get(sW) + 1)
    } else {
        map.set(sW, 1)
    }

    if(map.get(sW) > max) {
        max = map.get(sW)
        map.set('max', map.get(sW))
    }
}

console.log(map.get("max"))