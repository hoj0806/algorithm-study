const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

cosole.log(a + b)
cosole.log(a - b)
cosole.log(parseInt(a / b))
cosole.log(a % b)
