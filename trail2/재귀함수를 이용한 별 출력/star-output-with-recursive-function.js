const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.


function print(n) {
    if (n === 0) {
        return
    }

    print(n - 1)
    for (let i = 1; i <= n; i++) {
        process.stdout.write("*")
    }
    process.stdout.write("\n")
}

print(n)