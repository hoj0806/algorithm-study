const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split("\n")

let [a, b] = input


while(true) {
    if(a.indexOf(b) === -1) {
        console.log(a)
        break
    }

    let strArr = a.split("")
    let index = a.indexOf(b)
    strArr.splice(index, b.length)
    a = strArr.join("")
}   