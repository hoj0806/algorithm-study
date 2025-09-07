const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

function solution(a, b, c) {
    if(a > b) {
        if(b > c) {
            return c
        } else {
            return b
        }
    } else {
        if(a > c) {
            return c
        } else {
            return a
        }
    }
}

console.log(solution(a, b, c))