const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let arr = f[1].split(" ")
let cnt = 0

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === "2") cnt++

    if (cnt === 3) {
        console.log(i + 1)
        return
    }
}
