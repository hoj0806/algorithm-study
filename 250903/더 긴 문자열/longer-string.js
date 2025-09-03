const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")


let [a, b] = input
if(a.length === b.length) {
    console.log('same')
} else {
        if(a.length >= b.length) {
        console.log(a, a.length)
    } else {
        console.log(b, b.length)
    }
}
