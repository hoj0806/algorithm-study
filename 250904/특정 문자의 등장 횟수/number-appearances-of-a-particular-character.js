const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let a = "ee"
let b = "eb"


let aFind = 0
let bFind = 0

for(let i = 0; i < input.length; i++) {
    let s = input.slice(i, i + a.length)

    if(s === a) {
        aFind++
    }

    if(s === b) {
        bFind++
    }
}

console.log(aFind, bFind)