const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

// Please Write your code here.


let arr = numbers.sort((a, b) => a - b)
let left = 0
let right = n - 1
let ans = Infinity

while (left < right) {
    let sum = arr[left] + arr[right]
    ans = Math.min(ans, Math.abs(sum))
    if (sum > 0) {
        right--
    } else if (sum < 0) {
        left++
    } else {
        console.log(0)
        return
    }
}

console.log(ans)