const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function print(n) {
    for(let i = 1; i <= n; i++) {
        process.stdout.write('12345^&*()_\n')
    }
}

print(n)