const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [mathA ,englishA] = input[0].split(" ").map(Number)
let [mathB ,englishB] = input[1].split(" ").map(Number)

if(mathA !== mathB) {
   if(mathA > mathB) {
        console.log('A')
   } else {
        console.log('B')
   }
} else {
    if(englishA > englishB) {
        console.log('A')
    } else {
        console.log('B')
    }
}