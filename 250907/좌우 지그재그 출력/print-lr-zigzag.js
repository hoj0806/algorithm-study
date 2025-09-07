const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++) {
    let str = ''
    if(i % 2 !== 0 ) {
          for(let j = 1 + (n * (i - 1)); j <= n * i; j++) {
        str += j + " "
    }      
    } else {
        for(let j = n * i; j >= 1 + (n * (i - 1)); j--) {
            str += j + " "
        }
    }
  
    console.log(str)
}