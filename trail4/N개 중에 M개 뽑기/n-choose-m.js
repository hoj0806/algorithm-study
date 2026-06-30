const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.


let answer = []

function solution(number) {
    if (number === m + 1) {
        console.log(answer.join(" "))
        return
    }

    for (let i = 1; i <= n; i++) {
        if (answer.length === 0) {
            answer.push(i)
            solution(number + 1)
            answer.pop()
        }

        if (answer.length > 0 && i > answer[answer.length - 1]) {
            answer.push(i)
            solution(number + 1)
            answer.pop()
        }

    }
}

solution(1)



