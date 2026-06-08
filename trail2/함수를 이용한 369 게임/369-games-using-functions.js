const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function check(n) {
    let str = String(n)
    return str.includes("3") || str.includes("6") || str.includes("9")
}

function is_magic_number(n) {
    return n % 3 === 0 || check(n)
}

function solution(a, b) {
    let cnt = 0
    for (let i = a; i <= b; i++) {
        if (is_magic_number(i)) cnt++
    }

    return cnt
}

console.log(solution(A, B))