const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.


let list = []

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i !== j) {
            list.push(i + "," + j)
        }
    }
}

for (let i = 0; i < k; i++) {
    let row = arr[i]
    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let s = row[k] + "," + row[j]
            list = list.filter((item) => item !== s)
        }
    }
}

console.log(list.length)