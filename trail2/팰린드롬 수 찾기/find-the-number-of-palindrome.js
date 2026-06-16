const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(' ').map(Number);

// Please Write your code here.


let cnt = 0

for (let i = x; i <= y; i++) {
    let str = String(i)

    let isPalindrome = true
    for (let j = 0; j < Math.floor(str.length / 2); j++) {

        if (str[j] !== str[str.length - 1 - j]) {
            isPalindrome = false
            break
        }
    }

    if (isPalindrome) cnt++
}

console.log(cnt)