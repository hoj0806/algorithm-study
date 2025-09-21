const SortedMap = require("collections/sorted-map");

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
// Please Write your code here.

let count = new SortedMap()


for(let i = 0; i < n; i++) {
    if(!count.has(arr[i])) {
        count.set(arr[i], i + 1)
    }
}



for(let [key , value] of count.entries()) {
    console.log(key, value)
}