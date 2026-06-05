const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b, c] = f


if (a > b) {
    if (b > c) {
        console.log(b)
    } else {
        if (c > a) {
            console.log(a)
        } else {
            console.log(c)
        }
    }
} else {
    if (a > c) {
        console.log(a)
    } else {
        if (c > b) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
}