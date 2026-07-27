const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

// Please Write your code here.


function quick_sort(arr, start, end) {
    const part2 = partition(arr, start, end)

    if (start < part2 - 1) {
        quick_sort(arr, start, part2 - 1)
    }

    if (end > part2) {
        quick_sort(arr, part2, end)
    }
}

function partition(arr, start, end) {
    const pivot = arr[parseInt((start + end) / 2)]

    while (start <= end) {
        while (arr[start] < pivot) {
            start++
        }
        while (arr[end] > pivot) {
            end--
        }

        if (start <= end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }
    return start
}

quick_sort(arr, 0, n - 1)

console.log(arr.join(" "))