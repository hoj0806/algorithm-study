const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let cnt = 0
for(let i = 1; i <= n; i++) {
    let x = Math.abs(i - a)
    for(let j = 1; j <= n; j++) {
        let y = Math.abs(j - b)
        for(let k = 1; k <= n; k++) {
            let z = Math.abs(k - c)
            if(x <= 2 || y  <= 2 || z <= 2) {
                cnt++
            }
        }
    }
}

console.log(cnt)