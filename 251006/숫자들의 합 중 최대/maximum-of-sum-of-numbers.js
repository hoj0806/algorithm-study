const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);
// Please Write your code here.



let answer = 0

for(let i = x; i <= y; i++) {
    let z = i
    let sum = 0
    while(true) {
        if(z < 10) {
            sum+=z
            break
        }

        sum+=(z % 10)
        z = parseInt(z / 10)
    }
    answer = Math.max(answer, sum)
}

console.log(answer)