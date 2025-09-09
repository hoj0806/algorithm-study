const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0];

// Please Write your code here. 


let t = 0

for(let i = 0; i < binaryInput.length; i++) {
    if(binaryInput[i] === '1') {
        t+= 2**(binaryInput.length - i -1)
    }
}

console.log(t)