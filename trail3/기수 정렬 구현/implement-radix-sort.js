const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

// Please write your code here.



function radix_sort(arr) {
    let maxVal = Math.max(...arr)
    for (let pos = 1; Math.floor(maxVal / pos) > 0; pos *= 10) {
        const bucket = Array.from({ length: 10 }, () => [])

        for (let j = 0; j < arr.length; j++) {
            const digit = Math.floor(arr[j] / pos) % 10
            bucket[digit].push(arr[j])
        }
        arr = bucket.flat()
    }

    return arr
}

arr = radix_sort(arr)

console.log(arr.join(" "))