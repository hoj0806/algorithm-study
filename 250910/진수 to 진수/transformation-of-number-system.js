const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.


let sum = 0

let arr = n.split("").map(Number)

for(let i = 0; i < arr.length; i++) {
    sum = sum * a + arr[i]
}

let answer = []

while(true) {
    if(sum < b) {
        answer.push(sum)
        break
    }
    answer.push(sum % b)
    sum = parseInt(sum / b)
}

console.log(answer.reverse().join(""))