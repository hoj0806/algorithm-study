const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);
// Please Write your code here.

function gcd(a, b) {
    let answer = 0
    for(let i = a; i >= 1; i--) {
        if(b % i === 0 && a % i === 0) {
            answer = i
            break
        }
    }
    console.log(answer)
}

gcd(n, m)