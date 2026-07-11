const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const Heap = require("collections/heap");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

const pq = new Heap();

for (let i = 0; i < n; i++) {
    pq.push(arr[i])
}


for (let i = 1; i <= m; i++) {
    let top = pq.pop()
    pq.push(top-1)
}

console.log(pq.peek())
