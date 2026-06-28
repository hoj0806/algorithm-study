const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let A = input[0];
// Please Write your code here.

let arr = A.split("")

let len = arr.length

let min = Infinity

for (let i = 1; i <= len; i++) {
    let z = arr[len - 1]

    for (let j = len - 1; j >= 1; j--) {
        arr[j] = arr[j - 1]
    }
    arr[0] = z

    let cnt = 1
    let str = ''
    
    for (k = 0; k < len - 1; k++) {
        if (arr[k] === arr[k + 1]) {
            if (k === len - 2) {
                cnt++
                str += arr[k] + cnt

            } else {
                cnt++
            }
        } else {
            if (k === len - 2) {
                str += arr[k] + cnt + arr[k + 1] + 1
            } else {
                str += arr[k] + cnt
                cnt = 1
            }

        }
    }
    min = Math.min(min, str.length)
}

if(A.length === 1) {
    console.log(2)
} else {
    console.log(min)
}