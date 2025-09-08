const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.

function fac(n) {
    if(n === 1) {
        return 1
    }

    return fac(n - 1) * n
}

console.log(fac(N))