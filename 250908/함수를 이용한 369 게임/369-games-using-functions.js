const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function solution(a) {
    if(a % 3 === 0 || a % 6 === 0 || a % 9 === 0) {
        return true
    } else {
        return false
    }
}

function soltuion2(a) {
    let checked = false
    let r = 0
    while(a !== 0) {
        if(r === 3 || r === 6 || r === 9 || a === 3 || a=== 6 || a === 9) {
            checked = true
            break
        }
        r = a % 10
        a = parseInt(a / 10)
    }
    return checked
}

let cnt = 0

for(let i = A; i <= B; i++) {
    if(solution(i) || soltuion2(i)) {
        cnt++
    }
}

console.log(cnt)