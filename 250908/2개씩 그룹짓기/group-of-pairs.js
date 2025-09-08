const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.

nums.sort((a, b) => a - b)

let arr = []
for(let i = 0; i < nums.length; i++) {
    if(arr.length === nums.length / n) {
        break
    }
    arr.push(nums[i] + nums[nums.length - 1 - i])
}

arr.sort((a, b) => b - a)
console.log(arr[0])