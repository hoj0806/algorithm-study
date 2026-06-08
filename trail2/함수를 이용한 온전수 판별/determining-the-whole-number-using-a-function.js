const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

function isNotEven(n) {
    return n % 2 !== 0
}

function is_magic_number(n) {
    return isNotEven(n) && (n % 10 !== 5) && !(n % 3 === 0 && n % 9 !== 0)
}

function solution(a, b) {
    let cnt = 0
    for (let i = a; i <= b; i++) {
        if (is_magic_number(i)) cnt++
    }

    return cnt
}

console.log(solution(a, b))