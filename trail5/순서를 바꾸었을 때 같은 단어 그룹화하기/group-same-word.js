const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, n + 1);
// Please Write your code here.


let map = new Map()
let max = -1


for (let i = 0; i < words.length; i++) {
    let sortedWords = [...words[i]].sort().join("")
    map.set(sortedWords, (map.get(sortedWords) || 0) + 1)
}

map.forEach((v) => {
    max = Math.max(max, v)
})

console.log(max)