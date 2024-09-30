function solution(n, wires) {
    function dfs(target) {
        for(let i = 0; i < arr[target].length; i++) {
            if(visited[arr[target][i]] === false) {
                visited[arr[target][i]] = true;
                count++;
                dfs(arr[target][i]);
            }
        }
    }
    
    var answer = 200;
    const arr = Array.from(new Array(n + 1), () => []);
    let visited;
    for(let i = 0; i < wires.length; i++) {
        arr[wires[i][0]].push(wires[i][1]);
        arr[wires[i][1]].push(wires[i][0]);
    }
    let count;
    for(let i = 0; i < wires.length; i++) {
        visited = new Array(n + 1).fill(false);
        visited[wires[i][0]] = true;
        visited[wires[i][1]] = true;
        count = 1;
        dfs(wires[i][0]);
        if(answer > Math.abs(n - 2 * count)) answer = Math.abs(n - 2 * count);
    }
    return answer;
}