const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

n-=1

function solution(n) {
    if(n === 0) {
        return
    }
    solution(n - 1)
 
    numbers[n] =
     LCM(numbers[n-1], numbers[n], GCD(Math.max(numbers[n-1], numbers[n]),Math.min(numbers[n-1], numbers[n])
    ))
}
function GCD(a, b) {
    if(b === 0) {
        return a
    }

    return GCD(b, a % b)
}

function LCM(a, b ,gcd) {
    return (a * b) / gcd
}

solution(n)

console.log(numbers[n])