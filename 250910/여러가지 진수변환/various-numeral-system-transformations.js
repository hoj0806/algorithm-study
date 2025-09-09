const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [n, b] = input[0].split(' ').map(Number);

// Please Write your code here.

let arr = []
while(true) {
    if(n < b) {
        arr.push(n)
        break
    }
    arr.push(n % b)
    n = parseInt(n / 2)
}

console.log(arr)