const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input
let arr = str.split("")

let newArr = arr.map((i) => {
    if(i === str[0]) {
        return str[1]
    } else if(i === str[1]) {
        return str[0]
    } else {
        return i
    }
})

console.log(newArr.join(""))