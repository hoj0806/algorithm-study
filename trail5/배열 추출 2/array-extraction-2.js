const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
const Heap = require("collections/heap");

// Please Write your code here.

const pq = new Heap(null, null, (a, b) => {
    let absA = Math.abs(a)
    let absB = Math.abs(b)
    if (absA === absB) {
        return b - a
    } else {
        return absB - absA
    }
});


for (let i = 0; i < n; i++) {
    let num = arr[i]
    if (num === 0) {
        if (pq.length === 0) {
            console.log(0)
        } else {
            console.log(pq.pop())
        }
    } else {
        pq.push(num)
    }
}



