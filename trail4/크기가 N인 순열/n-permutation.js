const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.


let answer = []
let visited = Array(n + 1).fill(false)

function solution(num) {
    if (num === n) {
        console.log(answer.join(" "))
        return
    }

    for (let i = 1; i <= n; i++) {
        if (visited[i]) {
            continue
        }

        visited[i] = true
        answer.push(i)
        solution(num + 1)
        answer.pop()
        visited[i] = false
    }
}

solution(0)