const SortedMap = require("collections/sorted-map");

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1, 1 + n);

// Please Write your code here.


let count = new SortedMap()

for(let i = 0; i < words.length; i++) {
    let w = words[i]
    if(count.has(w)) {
        count.set(w, count.get(w) + 1)
    } else {
        count.set(w, 1)
    }
}

for(let [key ,value] of count.entries()) {
    let percentage = (value / n) * 100
    console.log(key , percentage.toFixed(4))
}