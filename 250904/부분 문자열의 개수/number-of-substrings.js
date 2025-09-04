const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [str, find] = input

let cnt = 0

for(let i = 0; i < str.length - find.length + 1; i++) {
    let allMatched = true
    for(let j = 0; j < find.length; j++) {
        if(str[i + j] !== find[j]) {
            allMatched = false
            break
           
        }
    }

    if(allMatched) {
        cnt++
    }
}

console.log(cnt)