const fs = require('fs')
let arr = fs.readFileSync(0).toString().trim().split('\n')

let cnt1 = 0
let cnt2 = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {
        cnt1++
    } 
    if(arr[i] % 5 === 0) {
        cnt2++
    }
}

console.log(cnt1, cnt2)