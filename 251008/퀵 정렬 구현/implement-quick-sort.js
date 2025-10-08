const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(" ").map(Number);

// Please Write your code here.


function quickSort(arr, start, end) {
    let part2 = partition(arr, start, end)

    if(start < part2 - 1) {
        quickSort(arr, start, part2 - 1)
    }

    if(part2 < end) {
        quickSort(arr, part2, end)
    }
}

function partition(arr, start, end) {
    let pivot = arr[Math.floor((start + end) / 2)]

    while(start <= end) {
        while(arr[start] < pivot) start++
        while(arr[end] > pivot) end--
        if(start <= end) {
            swap(arr, start, end)
            start++
            end--
        }
    }

    return start
}

function swap(arr, start, end) {
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
}

quickSort(arr, 0 , n-1)

console.log(arr.join(" "))