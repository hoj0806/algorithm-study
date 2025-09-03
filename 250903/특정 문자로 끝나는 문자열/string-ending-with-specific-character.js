const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let find = input.pop()

let cnt = 0

for(let i = 0; i < input.length; i++) {
    let str = input[i]
    if(str[str.length - 1] === find) {
        console.log(str)
        cnt+=1
    }
}

if(cnt === 0) {
    console.log('None')
}