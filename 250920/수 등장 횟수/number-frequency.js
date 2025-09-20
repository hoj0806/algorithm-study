const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.

let map = new Map()

for(let i = 0; i < arr.length; i++) {
    let n = arr[i]
    if(map.has(n)) {
        map.set(arr[i], map.get(n) + 1)
    } else {
        map.set(arr[i], 1)
    }
}

for(let i = 0; i < queries.length; i++) {
    let q = queries[i]
    if(map.has(q)) {
        process.stdout.write(map.get(q) + " ")
    } else {
        process.stdout.write(0 + " ")

    }
}