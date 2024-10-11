function solution(board, aloc, bloc) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const lenX = board.length;
    const lenY = board[0].length;
    
    const dfs = (aloc, bloc) => {
        if(!board[aloc[0]][aloc[1]]) return 0;
        let result = 0;
        board[aloc[0]][aloc[1]] = 0;
        for(let i = 0; i < 4; i++) {
            const nx = aloc[0] + dx[i];
            const ny = aloc[1] + dy[i];
            if(nx < 0 || nx >= lenX || ny < 0 || ny >= lenY || board[nx][ny] === 0) {
                continue;
            }
            let target = dfs(bloc, [nx, ny]) + 1;
            if(result % 2 === 0 && target % 2 === 1) {
                result = target;
            }
            else if(result % 2 === 0 && target % 2 === 0) {
                result = Math.max(result, target);
            }
            else if(result % 2 === 1 && target % 2 === 1) {
                result = Math.min(result, target);
            }
        }
        board[aloc[0]][aloc[1]] = 1;
        return result;
    }
    
    const answer = dfs(aloc, bloc);
    
    return answer;
}