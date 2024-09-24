class MinHeap {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;
    }

    push(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 0) {
            return null;
        }
        const target = this.items[0];
        this.items[0] = this.back();
        this.items.pop();
        this.bubbleDown();
        return target;
    }

    front() {
        return this.items[0];
    }

    back() {
        return this.items[this.size() - 1];
    }

    clear() {
        this.items = [];
    }

    swap(a, b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.items[parentIndex][1] <= this.items[index][1]) {
                break;
            }

            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smallerChild =
                rightChild < this.size() &&

                this.items[rightChild][1] < this.items[leftChild][1]
                    ? rightChild
                    : leftChild;

            if (this.items[index][1] <= this.items[smallerChild][1]) {
                break;
            }

            this.swap(index, smallerChild);
            index = smallerChild;
        }
    }
}

function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    const dists = new Array(N + 1).fill(Infinity);
    dists[1] = 0;
    
    for(const [a, b, w] of road) {
        graph[a].push([b, w]);
        graph[b].push([a, w]);
    }
    
    const q = new MinHeap();
    q.push([1, 0]);
    
    while(q.size()) {
        const [node, dist] = q.pop();
        for(const [next, w] of graph[node]) {
            const newDist = dist + w;
            if(dists[next] > newDist) {
                dists[next] = newDist;
                q.push([next, newDist]);
            }
        }
    }
    
    return dists.filter((ele) => ele <= K).length;
}