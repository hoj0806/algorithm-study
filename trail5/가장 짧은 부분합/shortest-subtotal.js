const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(" ").map(Number);
const sequence = input[1].split(" ").map(Number);

// Please Write your code here.


let ans = Infinity
let sumVal = 0
let j = 0

for (let i = 0; i < n; i++) {
    while (j + 1 < n && sumVal < s) {
        sumVal += sequence[j]
        j++
    }
    if (sumVal >= s) {
        ans = Math.min(ans, j - i)
    }
    sumVal -= sequence[i]
}

console.log(ans === Infinity ? -1 : ans)