const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);

// Please Write your code here.



let answer = []


function solution(num) {
    if (num === n) {
        console.log(answer.join(" "))
        return
    }

    for (let i = 1; i <= k; i++) {
        let len = answer.length;
        if (len >= 2 && answer[len - 1] === i && answer[len - 2] === i) {
            continue;
        }


        answer.push(i)
        solution(num + 1)
        answer.pop()





    }
}

solution(0)