const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.


let cnt = 0
let j = 0
let sumVal = 0


for (let i = 0; i < n; i++) {
    while (j < n && sumVal < m) {
        sumVal += arr[j]
        j++
    }

    if (sumVal === m) cnt++

    sumVal -= arr[i]
}

console.log(cnt)