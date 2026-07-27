const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.


function selection_sort(arr) {
    let len = arr.length

    for (let i = 0; i < len; i++) {
        let minIndex = i
        for (let j = i; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}

selection_sort(arr)

console.log(arr.join(" "))