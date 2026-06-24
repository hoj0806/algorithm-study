const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// Please write your code here.



for (let i = 1; i <= 6; i++) {
    let bucket = Array(10).fill(0).map(() => [])
    let pos = 10 ** (i - 1)


    for (let j = 0; j < n; j++) {
        bucket[Math.floor(arr[j] / pos) % 10].push(arr[j])
    }

    let store = []

    for (let p = 0; p < bucket.length; p++) {
        let row = bucket[p]
        for (let q = 0; q < row.length; q++) {
            if (row.length !== 0) {
                store.push(bucket[p][q])
            }
        }
    }

    arr = store

}

console.log(arr.join(" "))