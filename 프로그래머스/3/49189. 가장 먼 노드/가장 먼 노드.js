function solution(n, edge) {
    var answer = 1;
    let visited = new Array(n + 1).fill(false);
    let arr = Array.from(new Array(n + 1), () => []);
    let q = [1];
    visited[1] = true;
    for(let i = 0; i < edge.length; i++) {
        arr[edge[i][0]].push(edge[i][1]);
        arr[edge[i][1]].push(edge[i][0]);
    }
    while(q.length) {
        let count = q.length;
        answer = q.length;
        while(count--) {
            let target = q.shift();
            for(let i = 0; i < arr[target].length; i++) {
                if(visited[arr[target][i]] == false) {
                    visited[arr[target][i]] = true;
                    q.push(arr[target][i]);
                }
            }
        }
    }
    return answer;
}