const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const binaryInput = input[0].split("").map(Number);

// Please Write your code here. 

let ten = 0


for (let i = 0; i < binaryInput.length; i++) {
    ten = ten * 2 + binaryInput[i]
}


ten *= 17

let result = []

while(true) {
    if(ten < 2) {
        result.push(ten)
        break
    }

    result.push(ten % 2)
    ten = Math.floor(ten / 2)
}

console.log(result.reverse().join(""))

