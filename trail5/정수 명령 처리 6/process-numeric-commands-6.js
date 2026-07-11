const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const Heap = require("collections/heap");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
const pq = new Heap();

for (let i = 0; i < n; i++) {
    let [c, n] = commands[i].split(" ")
    n = Number(n)
    if (c === 'push') {
        pq.push(n)
    } else if (c === 'pop') {
        console.log(pq.pop())
    } else if (c === 'size') {
        console.log(pq.length)
    } else if (c === 'empty') {
        console.log(pq.length === 0 ? 1 : 0)
    } else if (c === 'top') {
        console.log(pq.peek())
    }
}