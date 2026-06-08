const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.

function printStar(n, m) {
    for (let i = 1; i <= n; i++) {
        let star = ''

        for (let j = 1; j <= m; j++) {
            star += "1"
        }
        console.log(star)
    }
}

printStar(n, m)