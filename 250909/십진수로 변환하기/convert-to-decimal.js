const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryStr = input[0];

// Please Write your code here.

let answer = 0

for(let i = 0; i< binaryStr.length; i++) {
    if(binaryStr[i] === "1") {
        answer += (2**(binaryStr.length  - i - 1))
    }
}

console.log(answer)