const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])


if(a > b) {
    if(a < c) {
        console.log(a)
    } else {
        if(c < b) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
} else {
    if(c < a) {
        console.log(a)
    } else {
        if(c > b) {
            console.log(b)
        } else {
            console.log(c)
        }
    }
}