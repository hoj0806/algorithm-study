const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [str, find] = input

let answer = -1

for(let i = 0; i < str.length - 1; i++) {
    str = str.slice(-1) + str.slice(0, - 1)
    if(str === find) {
        answer = i + 1
        break
    }
}

console.log(answer)