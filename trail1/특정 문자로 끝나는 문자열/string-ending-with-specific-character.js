const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let s = f[f.length - 1]

let arr = []
for (let i = 0; i < f.length - 1; i++) {
    let str = f[i]
    if (str[str.length - 1] === s) {
        arr.push(str)
    }
}

console.log(arr.length === 0 ? "None" : arr.join('\n'))