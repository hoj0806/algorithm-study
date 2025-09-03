const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let s = input


let arr = ["apple", "banana", "grape", "blueberry", "orange"]
let cnt = 0
for(let i = 0; i < arr.length; i++) {
    let str = arr[i]
    if(str[2] === s || str[3] === s) {
        console.log(str)
        cnt++
    }
}

console.log(cnt)