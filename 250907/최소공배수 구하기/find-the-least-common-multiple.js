const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function lcd(a, b) {
    let n = 1

    while(true) {
        if(n % a === 0 && n % b === 0) {
            console.log(n)
            break
        }
        n++
    }
}

lcd(n, m)