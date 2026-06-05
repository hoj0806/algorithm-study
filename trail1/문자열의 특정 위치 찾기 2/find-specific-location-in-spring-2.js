const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let arr = ["apple", "banana", "grape", "blueberry", "orange"]


let cnt = 0

for (let i = 0; i < arr.length; i++) {
    let str = arr[i]
    for (let j = 0; j < str.length; j++) {
        if (str[j] === f
            && (j === 2 || j === 3)
        ) {
            console.log(str)
            cnt++
        }
    }
}

console.log(cnt)