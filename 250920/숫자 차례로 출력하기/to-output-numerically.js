const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

let start = 1

function printAsce(n) {
    if(start > n) {
        return
    }

    process.stdout.write(start + " ")
    start+=1
    printAsce(n)
}

function printDesc(n) {
    if(n === 0) {
        return
    }

    process.stdout.write(n + " ")
    printDesc(n - 1)
}

printAsce(n)
console.log()
printDesc(n)