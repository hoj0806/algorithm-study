const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let count = new Map()

for(let i = 0; i < arr.length; i++) {
    let n = arr[i]
    if(count.has(n)) {
        count.set(n, count.get(n) + 1)
    } else {
        count.set(n,1)
    }
}

let z = []

for(let [key, value] of count) {
    z.push([key, value])
}

z.sort((a, b) => {
    let [keyA , valueA] = a
    let [keyB , valueB] = b
    if(valueA === valueB) {
        return keyB - keyA
    } else {
        return valueB - valueA
    }
}).slice(0, k).forEach(i => process.stdout.write(i[0] + " "))



