const fs = require('fs')
let n = fs.readFileSync(0).toString().trim().split(" ")

let [a, b] = n

if(a.length !== b.length) {
    if(a.length > b.length) {
        console.log(a, a.length)
    } else {
        console.log(b, b.length)
    }
} else {
    console.log("same")
}
