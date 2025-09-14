const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function merge_sort(arr) {
    let len = arr.length

    for(let i = 1; i < arr.length; i++) {
        let j = i - 1
        let key = arr[i]
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    console.log(arr.join(" "))
}

merge_sort(arr)