const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

let start = 1
function printStar(start) {
    if(start > n) {
        return
    }
    for(let i = 1; i <= start; i++) {
        process.stdout.write("*")
    }
    process.stdout.write('\n')
    start+=1
    printStar(start)
}

printStar(start)