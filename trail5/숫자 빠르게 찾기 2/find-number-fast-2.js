const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const SortedSet = require("collections/sorted-set")
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const queries = input.slice(2, 2 + m).map(Number);

// Please Write your code here.

const s = new SortedSet()

for (let i = 0; i < n; i++) {
    s.push(arr[i])
}


for (let i = 0; i < m; i++) {
    let q = queries[i]
   
    if (s.findLeastGreaterThanOrEqual(q)) {
        console.log(s.findLeastGreaterThanOrEqual(q).value)
    } else {
        console.log(-1)
    }
}
