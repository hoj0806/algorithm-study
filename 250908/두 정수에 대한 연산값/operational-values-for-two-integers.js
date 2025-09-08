const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function solution(a, b) {
    if(a > b) {
        a+=25
        b*=2
    } else {
        b+=25
        a*=2
    }
    return [a, b]
}

[a, b] = solution(a, b)

console.log(a, b)