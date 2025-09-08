const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
// Please Write your code here.

function solution(a, b) {
    if(a > b) {
        a*=2
        b+=10
    } else {
        b*=2
        a+=10
    }

    return [a, b]
}

[a, b] = solution(a, b)

console.log(a, b)
