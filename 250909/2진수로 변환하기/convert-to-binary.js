const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

let arr = []


while(true) {
    if(n < 2) {
        arr.push(n)
        break
    }

    arr.push(n % 2)
    n = parseInt(n / 2)
}

console.log(arr.reverse().join(""))