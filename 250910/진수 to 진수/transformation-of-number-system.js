const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.


function translate10(a, b) {
    let answer = 0
    let arr = String(a).split(" ")
    for(let i = 0; i < arr.length; i++) {
        answer = answer * b + Number(arr[i])
    }
    console.log(answer)
    return answer
}

translate10(11, 8)