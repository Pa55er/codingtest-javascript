function solution(k, dungeons) {
    
    function dfs(count, lef) {
        if(answer < count) answer = count;
        for(let i = 0; i < dungeons.length; i++) {
            if(visited[i] == false && lef >= dungeons[i][0]) {
                visited[i] = true;
                dfs(count + 1, lef - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }
    
    var answer = 0;
    const visited = new Array(dungeons.length).fill(false);
    dfs(0, k);
    return answer;
}