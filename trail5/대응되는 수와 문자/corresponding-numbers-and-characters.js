const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1, 1 + n);
const queries = input.slice(1 + n, 1 + n + m);
// Please Write your code here.


let map = new Map()


for (let i = 0; i < n; i++) {
    map.set(String(i + 1), words[i])
    map.set(words[i], String(i + 1))
}

for (let i = 0; i < m; i++) {
    console.log(map.get(queries[i]))
}
