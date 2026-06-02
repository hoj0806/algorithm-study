const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(":").map(Number)

let [hour, minute] = input;

console.log(hour+1 + ":" + minute)