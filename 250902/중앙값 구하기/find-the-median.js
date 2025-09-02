const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b, c] = input

if(a >= b) {
    if(a <= c) {
        console.log(a)
    } else {
        if(b >= c) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
} else {
    if(b <= c) {
        console.log(b)
    } else {
        if(a >= c) {
            console.log(a)
        } else {
            console.log(c)
        }
    }
}