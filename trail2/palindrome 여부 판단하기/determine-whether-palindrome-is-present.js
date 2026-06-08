const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.


function solution(str) {
    if (str === str.split("").reverse().join("")) return "Yes"
    return "No"
}

console.log(solution(str))