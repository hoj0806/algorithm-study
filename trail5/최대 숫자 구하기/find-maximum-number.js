const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const SortedSet = require("collections/sorted-set")

const [n, m] = input[0].split(" ").map(Number);
const queries = input[1].split(" ").map(Number);

// Please Write your code here.

let s = new SortedSet()

for (let i = 1; i <= m; i++) {
    s.push(i)
}


for(let i = 0; i < n; i++) {
    let q = queries[i]
    s.delete(q)
    console.log(s.findGreatest().value)
}
