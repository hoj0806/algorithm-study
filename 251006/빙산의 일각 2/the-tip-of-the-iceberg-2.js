const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const h = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

let answer = 0

for(let i = 1; i <= 1000; i++) {
    let sum = 0
    let b = false
    for(let j = 0; j < h.length; j++) {
        let ice = h[j]
        if(i < ice) b = true
        else {
            if(b === true) {
                sum++
                b = false
            }
        }
    }

    if(b === true) sum++
    answer = Math.max(answer, sum)
}

console.log(answer)