const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function isPrime(n) {

    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }

    return true
}


function solution(a, b) {
    let sum = 0

    for (let i = a; i <= b; i++) {
        if (isPrime(i)) sum += i
    }

    return sum
}

console.log(solution(A, B))