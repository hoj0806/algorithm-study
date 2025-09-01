const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("-").map(Number)

let [month, day , year] = input

console.log(`${year}.${month}.${day}`)