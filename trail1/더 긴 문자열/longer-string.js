const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = f

if(a.length === b.length) {
    console.log('same')
} else if(a.length > b.length) {
    console.log(a, a.length)
} else {
    console.log(b, b.length)
}