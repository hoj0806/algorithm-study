const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let answer = 0
for (let i = 1; i <= 10; i++) {
    let cnt = 0
    let p = ''
    for (let j = 0; j < movements.length; j++) {
        let [number, position] = movements[j]
        if (i === number) {
            cnt++
            if (p === '') {
                p = position
            } else {
                if (p !== position) {
                    answer++
                }
                p = position
            }
        }
    }
}

console.log(answer)