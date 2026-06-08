const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.


function gcd(a, b) {
    let max = 0
    let min = 0

    if (a >= b) {
        max = a
        min = b
    } else {
        max = b
        min = a
    }

    let g = 0
  
    for (let i = 1; i <= max; i++) {
        if (max % i === 0 && min % i === 0 && i <= max && i <= min) {
            if (i > g) g = i
        }
    }
    console.log(g)
}

gcd(n, m)