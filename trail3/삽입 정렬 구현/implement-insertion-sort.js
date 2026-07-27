const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


function insertion_sort(arr) {
    const len = arr.length
    for (let i = 1; i < n; i++) {
        let j = i - 1
        let key = arr[i]
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j -= 1
        }
        arr[j + 1] = key
    }
}

insertion_sort(arr)

console.log(arr.join(" "))