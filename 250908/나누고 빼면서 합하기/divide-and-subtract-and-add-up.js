const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let A = input[1].split(" ").map(Number);
// Please Write your code here.

let sum = A[m-1]

function solution() {
    while(true) {
        if(m === 1) {
            break
        } 

        if(m % 2  === 0) {
                m/=2
            } else {
                m-=1
            }
        
          sum+= A[m-1]
    }
}

solution()

console.log(sum)