const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.


let answer = []

function solution(currNum, lastNum) {
    if (currNum === m + 1) {
        console.log(answer.join(" "))
        return
    }


    for (let i = lastNum + 1; i <= n; i++) {
        answer.push(i)
        solution(currNum + 1, i)
        answer.pop()
    }
}

solution(1, 0)

