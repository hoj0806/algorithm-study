const fs =require('fs')
let n = fs.readFileSync(0).toString().trim().split('\n').map(Number)



let idx = 0

while(true) {
    if(n[idx] === 25) {
        console.log("Good")
        break
    } else {
         if(n[idx] > 25) {
            console.log('Lower')
        } else {
            console.log("Higher")
        }
    }
   idx++
}