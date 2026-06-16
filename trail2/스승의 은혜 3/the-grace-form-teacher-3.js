const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, b] = input.shift().split(' ').map(Number);
const arr = [];
for (let i = 0; i < n; i++) {
    const [p, s] = input.shift().split(' ').map(Number);
    arr.push([p, s])
}
let max = -1


// Please Write your code here.



for (let i = 0; i < n; i++) {
    let costs = []
    for (let j = 0; j < n; j++) {
        let [p1, b1] = arr[j]

        if (i === j) {
            costs.push((p1 / 2) + b1)
        } else {
            costs.push((p1 + b1))

        }


    }
    costs.sort((a, b) => a - b)

    let sum = 0
    let cnt = 0

    for (let k = 0; k < n; k++) {
        if (sum + costs[k] > b) {
            break
        }
        cnt++
        sum += costs[k]
    }

    max = Math.max(max, cnt)
}

console.log(max)