const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B, C] = input[0].split(' ').map(Number);

// Please write your code here.


let answer = 0

if(A < 11) {
    console.log(-1)
} else if(B < 11) {
    console.log(-1)
} else if(C < 11) {
    console.log(-1)
} else {
     if(A !== 11) {
        answer += (A - 11) * 1440
    }
    let a = ((B * 60) + C)
    let b = ((11 * 60) + 11)
    answer += (a - b)
    console.log(answer)
}




