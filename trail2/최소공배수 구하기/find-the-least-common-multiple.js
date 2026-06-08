const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function lcd(a, b) {
    let n = Math.max(a, b)

    while (true) {
        if (n % a === 0 && n % b === 0) {
            console.log(n)
            return
        }

        n++

    }
}

lcd(n, m)