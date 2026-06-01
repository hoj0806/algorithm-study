const fs = require('fs')
const p = fs.readFileSync(0).toString().trim().split('\n')

let a = p[0].split(" ").map(Number)
let b = p[1].split(" ").map(Number)


if(a[0] > b[0] && a[1] > b[1]) {
    console.log(1)
} else {
    console.log(0)
}