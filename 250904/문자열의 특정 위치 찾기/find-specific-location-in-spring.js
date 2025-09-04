const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let [str, find] = input

let answer = str.indexOf(find) === -1 ? 'No' : str.indexOf(find)

console.log(answer)