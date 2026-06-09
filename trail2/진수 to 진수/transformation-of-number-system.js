const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const n = input[1];
// Please Write your code here.

let ten = 0

let arr = n.split("").map(Number)

for (let i = 0; i < arr.length; i++) {
    ten = ten * a + arr[i]
}


let result = []

while (true) {
    if (ten < b) {
        result.push(ten)
        break
    }

    result.push(ten % b)
    ten = Math.floor(ten / b)
}

console.log(result.reverse().join(""))