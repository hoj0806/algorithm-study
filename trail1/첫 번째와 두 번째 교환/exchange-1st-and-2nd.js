const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let a = f[0]
let b = f[1]
let arr = f.split("")

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === a) {
        arr[i] = b
    } else if(arr[i] === b) {
        arr[i] = a
    }
}

console.log(arr.join(""))
