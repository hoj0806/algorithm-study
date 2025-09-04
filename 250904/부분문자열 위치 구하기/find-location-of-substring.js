const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [str, find] = input

let idx = -1

for(let i = 0; i < str.length - find.length + 1; i++) {
    let isMatched = true
    for(let j = 0; j < find.length; j++) {
        if(str[i + j] !== find[j]) {
            isMatched = false
        }
    }
    if(isMatched) {
        idx = i
        break
    }
}

console.log(idx)