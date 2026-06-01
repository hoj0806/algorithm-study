const fs = require('fs')
let s = fs.readFileSync(0).toString().trim()

let str = ["apple", "banana", "grape", "blueberry", "orange"]

let cnt = 0

for(let i = 0; i < str.length; i++) {
    if(str[i][2] === s || str[i][3] === s) {
        console.log(str[i])
        cnt++
    }
     
}


console.log(cnt)