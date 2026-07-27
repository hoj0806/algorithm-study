const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


function selection_sort(arr) {
    let len = arr.length

    for (let i = 0; i < len; i++) {
        let min = Infinity
        let minIndex = 0
        for (let j = i; j < len; j++) {
            if (min > arr[j]) {
                min = Math.min(min, arr[j])
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

selection_sort(arr)

console.log(arr.join(" "))