const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.


let max = -1

for (let i = x; i <= y; i++) {
    let sum = 0
    let temp = i
    while (true) {
        if (temp < 10) {
            sum += temp
            break
        }

        sum += (temp % 10)
        temp = parseInt(temp / 10)
    }
    max = Math.max(max, sum)
}

console.log(max)