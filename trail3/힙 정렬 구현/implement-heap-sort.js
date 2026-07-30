const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.


function heapify(array, n, i) {
    let largest = i
    let left = i * 2
    let right = i * 2 + 1

    if (left <= n && array[left] > array[largest]) {
        largest = left
    }

    if (right <= n && array[right] > array[largest]) {
        largest = right
    }

    if (largest !== i) {
        let temp = array[i]
        array[i] = array[largest]
        array[largest] = temp
        heapify(array, n, largest)
    }
}
function buildMaxHeap(inputArray) {
    let array = [null, ...inputArray]
    let n = inputArray.length;

    for (let i = Math.floor(n / 2); i >= 1; i--) {
        heapify(array, n, i)
    }

    return array
}

function heap_sort(array, n) {
    let z = buildMaxHeap(array)

    for(let i = n; i > 1; i--) {
        let temp = z[i]
        z[i] = z[1]
        z[1] = temp 
        heapify(z, i - 1, 1)
    }

    return z
}
let k = heap_sort(arr, n)
console.log(k.slice(1).join(" "))


