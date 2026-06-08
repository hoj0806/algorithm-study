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

function check(n) {
    let sum = 0

    while (true) {
        if (n === 0) {
            break
        }

        sum += n % 10
        n = parseInt(n / 10)
    }
  
    if (sum % 2 === 0) {
        return true
    } else {
        return false
    }
}

function solution(a, b) {
    let cnt = 0
    for (let i = a; i <= b; i++) {
        if (isPrime(i) && check(i)) cnt++
    }

    return cnt
}

console.log(solution(A, B))
