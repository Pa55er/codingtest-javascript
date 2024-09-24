function solution(n, computers) {
    const dfs = (i) => {
        for(let j = 0; j < n; j++) {
            if(i != j && computers[i][j] === 1 && visited[j] == false) {
                visited[j] = true;
                dfs(j);
            }
        }
    };
    
    var answer = 0;
    let visited = new Array(n).fill(false);
    for(let i = 0; i < n; i++) {
        if(visited[i] == true) continue;
        visited[i] = true;
        answer++;
        dfs(i);
    }
    return answer;
}