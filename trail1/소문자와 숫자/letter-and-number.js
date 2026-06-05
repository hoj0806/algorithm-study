const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let result = ''

for(let ele of f) {
    if('a' <= ele && ele <= 'z' || 'A' <=ele && ele <= 'Z') {
        result += ele.toLowerCase()
    } else if(0 <= ele && ele <= 9) {
        result += ele
    }
}

console.log(result)