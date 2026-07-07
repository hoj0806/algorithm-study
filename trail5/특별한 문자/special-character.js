const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];

// Please Write your code here.



let map = new Map()

for (let i = 0; i < str.length; i++) {
    let s = str[i]
    map.set(s, (map.get(s) || 0) + 1)
}

let answer = 'None'

map.forEach((value, key) => {
    if (value === 1 && answer === 'None') {
        answer = key
    }
})

console.log(answer)