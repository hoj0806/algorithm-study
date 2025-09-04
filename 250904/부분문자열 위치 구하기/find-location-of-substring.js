const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [str, find] = input

let cnt = 0 

for(let i = 0; i < str.length - find.length + 1; i++) {
    let allSame = true
    for(let j = 0; j < find.length; j++) {
        if(str[i + j] !== find[j]) {
            allSame = false
        }
    }
    if(allSame) {
        cnt++
    }
}

let result = cnt === 0 ? -1 : cnt

console.log(result)