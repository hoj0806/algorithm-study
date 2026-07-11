const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const Heap = require("collections/heap");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

const pq = new Heap();


arr.forEach(num => {
    if (num === 0) {
        if (pq.length === 0) {
            console.log(0)
        } else {
            console.log(-pq.pop())
        }
    } else {
        pq.push(-num)
    }
})
