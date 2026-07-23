const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0].split("")

if (a.some(i => i === '0')) {
    // 0이 있는경우
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "0") {
            a[i] = '1'
            break
        }
    }
} else {
    // 0이 없는경우
    a[a.length - 1] = "0"
}

let answer = 0

for (let i = 0; i < a.length; i++) {
    answer = answer * 2 + Number(a[i])
}

console.log(answer)