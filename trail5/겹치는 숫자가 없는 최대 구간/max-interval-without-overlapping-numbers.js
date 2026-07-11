const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0], 10);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

let count = Array(120000).fill(0)
let ans = 0
let j = 0

for (let i = 0; i < n; i++) {
    while (j < n) {
        let num = arr[j]
        if (count[num] + 1 >= 2) break
        count[num]++
        j++
    }

    ans = Math.max(ans, j - i)
    count[arr[i]]--
}

console.log(ans)