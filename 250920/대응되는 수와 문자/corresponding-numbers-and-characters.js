const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const words = input.slice(1, 1 + n);
const queries = input.slice(1 + n, 1 + n + m);
// Please Write your code here.

let map1 = new Map()
let map2 = new Map()

for(let i = 0; i < words.length; i++) {
    map1.set(words[i], i + 1)
    map2.set(String(i+1), words[i])

}

for(let i = 0; i < queries.length; i++) {
    if(map1.has(queries[i])) {
        console.log(map1.get(queries[i]))
    } else {
        console.log(map2.get(queries[i]))
    }
}