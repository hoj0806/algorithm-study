const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const SortedSet = require("collections/sorted-set")

const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));
const queries = input.slice(1 + n, 1 + n + m).map(line => line.split(" ").map(Number));

// Please Write your code here.


let s = new SortedSet()

for (let i = 0; i < n; i++) {
    let [x, y] = points[i]
    s.push([x, y])
}

for (let i = 0; i < m; i++) {
    let q = queries[i]
    let idx = s.findLeastGreaterThanOrEqual(q)
    if(idx) {
        console.log(idx.value[0], idx.value[1])
    } else {
        console.log(-1, -1)
    }
}
