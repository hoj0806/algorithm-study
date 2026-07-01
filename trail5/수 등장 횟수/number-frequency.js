const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const queries = input[2].split(' ').map(Number);

// Please Write your code here.



let map = new Map()

for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
        map.set(arr[i], map.get(arr[i]) + 1)
    } else {
        map.set(arr[i], 1)
    }
}


let answer = []

for (let i = 0; i < m; i++) {
    if (map.has(queries[i])) {
        answer.push(map.get(queries[i]))
    } else {
        answer.push(0)
    }
}

console.log(answer.join(" "))