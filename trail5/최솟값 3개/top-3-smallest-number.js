const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.


class MaxPriorityQueue {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0
    }

    push(item) {
        this.heap.push(item)
        this._upheap()
    }

    pop() {
        if (this.isEmpty()) return null;              // 1. 큐가 비어있으면 null 반환
        if (this.size() === 1) return this.heap.pop(); // 2. 데이터가 1개뿐이면 그냥 pop()해서 반환 (길이가 0이 됨)

        let top = this.heap[0];
        this.heap[0] = this.heap.pop(); // 데이터가 2개 이상일 때만 마지막 값을 루트로 올림
        this._downheap();
        return top;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    _upheap() {
        let index = this.size() - 1
        const current = this.heap[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.heap[parentIndex]
            if (parent >= current) break;

            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = current;
    }

    _downheap() {
        let index = 0;
        const size = this.size();
        const current = this.heap[index];

        while ((index * 2 + 1) < size) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let largerIndex = leftChildIndex;


            if (
                rightChildIndex < size &&
                this.heap[rightChildIndex] > this.heap[leftChildIndex]
            ) {
                largerIndex = rightChildIndex;
            }

            if (current >= this.heap[largerIndex]) break;

            this.heap[index] = this.heap[largerIndex];
            index = largerIndex;
        }
        this.heap[index] = current;
    }
}

let q = new MaxPriorityQueue()

for (let i = 0; i < n; i++) {
    q.push(arr[i])

    if (q.size() < 3) {
        console.log(-1)
    } else {
        if (q.size() === 3) console.log(q.heap.reduce((a, c) => a * c, 1))
        else {
            q.pop()
            console.log(q.heap.reduce((a, c) => a * c, 1))
        }
    }
}