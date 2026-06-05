const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let str = f[1].split(" ").join("")
let arr = []
let s = ''
for (let i = 0; i < str.length; i++) {
    let idx = i + 1

    s += str[i]

    if (idx % 5 === 0) {
        arr.push(s)
        s = ''
    }

    if (i === str.length - 1) {
        arr.push(s)
    }

}

console.log(arr.join('\n'))