const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.

let arr = Array(n + 1).fill(0)
let end = false
for(let i = 0; i < penalizedPersons.length; i++) {
    arr[penalizedPersons[i]]++
    if(Math.max(...arr) === k) {
        console.log(arr.indexOf(Math.max(...arr)))
        break
    }

    if(i === penalizedPersons.length - 1) {
        console.log(-1)
    }
    
}