const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)



for(let i = 1; i <= n * 2 - 1; i++) {
    let str = ''

   for(let j = 1; j <= n; j++) {
        if(i <= n) {
            if(i + j > n) {
                str += "@ "
            } else {
                str += "  "
            }
        } else {
            if(Math.abs(3 - i) + j <= n) {
                str += "@ "
            } else {
                str += "  "
            }
           
        }
   }
    
console.log(str)
}