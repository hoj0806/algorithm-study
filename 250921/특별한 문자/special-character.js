const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];

// Please Write your code here.

let count = new Map()

for(let i = 0; i < str.length; i++) {
    let s = str[i]
    if(count.has(s)) {
        count.set(s, count.get(s) + 1)
    } else {
        count.set(s, 1)
    }
}

let arr = []

for(let [key, value] of count) {
    if(arr.length === 1) {
        break
    }
    if(value === 1) {
        arr.push(key)
    }
}

console.log(arr.length === 0 ? "None" : arr[0])