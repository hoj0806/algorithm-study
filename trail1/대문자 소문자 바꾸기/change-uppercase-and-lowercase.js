const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let r = ''

for (let ele of f) {
    if ('a' <= ele && ele <= 'z') {
        r += ele.toUpperCase()
    } else if ('A' <= ele && ele <= 'Z') r += ele.toLowerCase()
}

console.log(r)