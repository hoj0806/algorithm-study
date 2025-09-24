const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let r = input[1].split(" ").map(Number)
let arr = []

let max = Number.MIN_SAFE_INTEGER