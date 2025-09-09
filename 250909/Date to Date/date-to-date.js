const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

let days = [0, 31, 28, 31, 30, 31, 30 ,31 ,31, 30 ,31, 30, 31]

let answer = 1

while(true) {
    if(m1 === m2 && d1 === d2) {
        break
    }

    d1++
    if(d1 > days[m1]) {
        m1+=1
        d1 = 1
    }
    answer+=1
}

console.log(answer)

