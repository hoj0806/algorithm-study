const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input
let arr = str.split("")


let newArr = arr.map((s) => {
    if(s === str[1]) {
        return str[0]
    } else {
        return s
    }
})

console.log(newArr.join(""))