const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.


function solution(str) {
    let arr = []

    for (let i = 0; i < str.length; i++) {
        if (arr.indexOf(str[i]) === -1) {
            arr.push(str[i])
        }
    }

    return arr.length >= 2 ? "Yes" : "No"
}

console.log(solution(A))