const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let sum = 0
for (let ele of f) {
    if ((ele < 'a' || ele > 'z') && (ele < 'A' || ele > 'Z')) sum += Number(ele)
}

console.log(sum)