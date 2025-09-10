const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let r = []
let cnt = 0

for(let i = 0; i < arr.length; i++) {
        if(arr[i] > t) {
            cnt++
        } else {
            if(cnt !== 0) {
              r.push(cnt)
            }
            cnt = 0
        }
}

r.push(cnt)

console.log(r.length === 0 ? 0 : Math.max(...r))