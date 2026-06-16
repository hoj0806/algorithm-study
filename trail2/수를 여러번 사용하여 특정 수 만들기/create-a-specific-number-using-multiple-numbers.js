const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a, b, c] = input[0].split(' ').map(Number);
// Please Write your code here.


let n = Math.floor(c / a)
let max = -1

for (let i = 0; i <= n; i++) {
    let sum = a * i
    for (j = 0; j <= n; j++) {
        sum += b * j
        if (sum <= c) {
            max = Math.max(sum, max)
        }
        sum = a * i
    }
}

console.log(max)