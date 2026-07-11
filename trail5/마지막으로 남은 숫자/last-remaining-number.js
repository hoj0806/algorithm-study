const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const Heap = require("collections/heap");

// Please Write your code here.

const pq = new Heap();

for (let i = 0; i < n; i++) {
    pq.push(arr[i])
}

while (true) {
    if (pq.length < 2) {
        if (pq.length === 0) {
            console.log(-1)
        } else {
            console.log(pq.pop())
        }
        break
    }

    let top1 = pq.pop()
    let top2 = pq.pop()
    if (top1 !== top2) {
        pq.push(top1 - top2)
    }
}