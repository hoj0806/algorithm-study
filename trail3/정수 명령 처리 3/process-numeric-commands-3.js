const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please write your code here.

class Deque {
    constructor(maxSize = 10000) {
        this.dq = [];
        this.maxSize = maxSize;
        this.count = 0;
        this.head = 0;
        this.tail = 0;
    }

    // 1. 맨 뒤에 추가: tail을 시계 방향(+1)으로 이동 후 삽입
    push_back(item) {
        this.tail = (this.tail + 1) % this.maxSize;
        this.dq[this.tail] = item;
        this.count++;
    }

    // 2. 맨 앞에서 빼기: head를 시계 방향(+1)으로 이동 후 반환
    pop_front() {
        this.head = (this.head + 1) % this.maxSize;
        const item = this.dq[this.head];
        this.count--;
        return item;
    }

    // 3. 맨 앞에 추가: 현재 head 자리에 넣고, head를 반시계 방향(-1)으로 이동
    push_front(item) {
        this.dq[this.head] = item;
        this.head = (this.head - 1 + this.maxSize) % this.maxSize;
        this.count++;
    }

    // 4. 맨 뒤에서 빼기: 현재 tail 자리의 값을 키핑하고, tail을 반시계 방향(-1)으로 이동
    pop_back() {
        const item = this.dq[this.tail];
        this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
        this.count--;
        return item;
    }

    size() {
        return this.count;
    }

    empty() {
        return this.count === 0 ? 1 : 0; // 변수 직접 비교로 깔끔하게 처리
    }

    // 5. 맨 앞 원소 구경하기 (head의 다음 칸)
    front() {
        return this.dq[(this.head + 1) % this.maxSize];
    }

    // 6. 맨 뒤 원소 구경하기 (현재 tail이 서 있는 곳)
    back() {
        return this.dq[this.tail];
    }
}


let dq = new Deque();
let answer = [];

for (let i = 0; i < n; i++) {
    let [command, val] = commands[i].trim().split(" ");

    if (command === "push_front") {
        dq.push_front(val);
    } else if (command === "push_back") {
        dq.push_back(val);
    } else if (command === "pop_front") {
        answer.push(dq.empty() ? -1 : dq.pop_front()); // 문제 예외 조건 확인(비어있을 때 -1 등) 필요 시 대응
    } else if (command === "pop_back") {
        answer.push(dq.empty() ? -1 : dq.pop_back());
    } else if (command === "size") {
        answer.push(dq.size());
    } else if (command === "empty") {
        answer.push(dq.empty());
    } else if (command === "front") {
        answer.push(dq.empty() ? -1 : dq.front());
    } else if (command === "back") {
        answer.push(dq.empty() ? -1 : dq.back());
    }
}

console.log(answer.join("\n"));