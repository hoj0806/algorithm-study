const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function selection_sort(arr) {
    const len = arr.length

    for (let i = 0; i < len - 1; i++) {
        let min_idx = i
        for (let j = i + 1; j < len; j++) {
            if (arr[min_idx] > arr[j]) {
                min_idx = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min_idx]
        arr[min_idx] = temp
    }

}

selection_sort(arr)

console.log(arr.join(" "))
