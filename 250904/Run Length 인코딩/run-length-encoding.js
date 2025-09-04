const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input

let cnt = 0
let find = ''
let answer = ''

for(let i = 0; i < str.length; i++) {
    if(find === '') {
        find = str[i]
        cnt++
    } else {
        if(find === str[i]) {
            cnt++
        } else {
            answer += find + cnt
            find = str[i]
            cnt = 1
        }
    }
}
answer += find += cnt

console.log(answer.length)
console.log(answer)
