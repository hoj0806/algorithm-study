const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

for(let ele of f) {
    console.log(ele)
}