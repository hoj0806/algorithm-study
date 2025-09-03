const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log((input.reduce((a, b) => a + b) / input.length).toFixed(1))