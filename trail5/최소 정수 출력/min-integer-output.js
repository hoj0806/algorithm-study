const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.

class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    // 힙의 크기 반환
    size() {
        return this.heap.length;
    }

    // 큐가 비어있는지 확인
    isEmpty() {
        return this.heap.length === 0;
    }

    // 값 추가 (Enqueue)
    push(value) {
        this.heap.push(value);
        this._upheap();
    }

    // 최솟값 제거 및 반환 (Dequeue)
    pop() {
        if (this.isEmpty()) return null;
        if (this.size() === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop(); // 맨 마지막 노드를 루트로 이동
        this._downheap();
        return top;
    }

    // 최솟값 확인 (제거하지 않음)
    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    // 위로 올라가며 힙 성질 유지 (Up-heap / Bubble-up)
    _upheap() {
        let index = this.size() - 1;
        const current = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            // 부모가 현재 값보다 작거나 같으면 멈춤
            if (parent <= current) break;

            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = current;
    }

    // 아래로 내려가며 힙 성질 유지 (Down-heap / Bubble-down)
    _downheap() {
        let index = 0;
        const size = this.size();
        const current = this.heap[index];

        while ((index * 2 + 1) < size) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let smallerIndex = leftChildIndex;

            // 오른쪽 자식이 존재하고, 왼쪽 자식보다 더 작다면 오른쪽을 선택
            if (
                rightChildIndex < size &&
                this.heap[rightChildIndex] < this.heap[leftChildIndex]
            ) {
                smallerIndex = rightChildIndex;
            }

            // 현재 값이 자식들보다 작거나 같으면 멈춤
            if (current <= this.heap[smallerIndex]) break;

            this.heap[index] = this.heap[smallerIndex];
            index = smallerIndex;
        }
        this.heap[index] = current;
    }
}

const queue = new MinPriorityQueue()


for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
        if (queue.isEmpty()) {
            console.log(0)
        } else {
            console.log(queue.pop())
        }
    } else {
        queue.push(arr[i])
    }
}
