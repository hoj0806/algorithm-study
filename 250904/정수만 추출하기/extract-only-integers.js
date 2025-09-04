const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

let answer = 0
for(let i = 0; i < input.length; i++) {
    let str = input[i]
    let k = ''
    for(let j = 0; j < str.length; j++) {
        if(str[j] >= "0" && str[j] <= "9") {
            k+=str[j]
        } else {
            break
        }
    }
    answer += Number(k)
}

console.log(answer)