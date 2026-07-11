const fs = require("fs");
const SortedSet = require("collections/sorted-set");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const points = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));
const queries = input.slice(1 + n, 1 + n + m).map(Number);

// Please Write your code here.

const s = new SortedSet();


for (let i = 0; i < n; i++) {
    let [x, y] = points[i]
    s.push([x, y])
}

for (let i = 0; i < m; i++) {
    let q = queries[i]
    let idx = s.findLeastGreaterThanOrEqual([q, -Infinity])
    if (idx) {
        let [x, y] = idx.value
        console.log(x, y)
        s.delete(idx.value)
    } else {
        console.log(-1, -1)
    }
}
