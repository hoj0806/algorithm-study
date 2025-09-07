const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function isMagicNumber(n) {
    if(n % 2 === 0) {
        let sum = (n % 10) + parseInt(n / 10)
        if(sum % 5 === 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

if(isMagicNumber(n)) {
    console.log('Yes')
} else {
    console.log('No')
}