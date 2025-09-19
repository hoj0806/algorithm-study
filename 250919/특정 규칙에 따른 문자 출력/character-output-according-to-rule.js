const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)



for(let i = 1; i <= n * 2 - 1; i++) {
    let str = ''

    for(let j = 1; j <= n; j++) {
       if(i <= n) {
        str += "@ "
       }
    }

    console.log(str)
    
}