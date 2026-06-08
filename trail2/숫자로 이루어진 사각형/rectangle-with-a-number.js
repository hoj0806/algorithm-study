const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.

let cnt = 1
function print(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (cnt === 10) cnt = 1
            process.stdout.write(cnt + " ")
            cnt++
        }
        process.stdout.write('\n')
    }
}


print(N)