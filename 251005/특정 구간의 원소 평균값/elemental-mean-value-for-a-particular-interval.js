const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let answer = 0
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j <= arr.length; j++) {
       let s = arr.slice(i, j)
       let average = s.reduce((a, c) => a + c ,0) / s.length
       if(s.indexOf(average) !== -1) answer+=1
    }
}

console.log(answer)