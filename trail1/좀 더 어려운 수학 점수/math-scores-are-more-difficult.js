const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [a1, a2] = f[0].split(" ").map(Number)
let [b1, b2] = f[1].split(" ").map(Number)


if(a1 !== b1) {
  console.log(a1 > b1 ? "A" : "B")
} else {
  console.log(a2 > b2 ? "A" : "B")
}