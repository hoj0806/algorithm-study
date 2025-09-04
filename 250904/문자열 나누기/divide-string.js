const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let str = input[1].split(" ").join("")

let arr = []

for(let i = 0; i < str.length; i+=5) {
    arr.push(str.slice(i, i + 5))
}

console.log(arr.join('\n'))