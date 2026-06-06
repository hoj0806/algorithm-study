const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

console.log(f)
for (let i = 1; i <= f.length; i++) {
    let s = f.slice(-1) + f.slice(0, -1)
    f = s
    console.log(f)
}