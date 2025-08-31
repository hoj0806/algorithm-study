const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

const arr = ['apple', 'banana', 'grape', 'blueberry', 'orange']

let cnt = 0

for(let i = 0; i < arr.length; i++) {
    let str = arr[i]
    if(str[2] === input || str[3] === input) {
        console.log(arr[i])
        cnt+=1
    }
}

console.log(cnt)