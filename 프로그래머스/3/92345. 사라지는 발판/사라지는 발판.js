function solution(board, aloc, bloc) {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const lenX = board.length;
    const lenY = board[0].length;
    
    // DFS 함수. current는 현재 플레이어의 위치, opponent는 상대 플레이어의 위치, turn은 현재 턴
    const dfs = (current, opponent, turn) => {
        const [cx, cy] = current;
        if (!board[cx][cy]) {
            return [false, 0]; // 현재 플레이어가 움직일 수 없으면 패배
        }

        let win = false;
        let minWinMove = Infinity;
        let maxLoseMove = 0;

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];
            
            if (nx >= 0 && nx < lenX && ny >= 0 && ny < lenY && board[nx][ny]) {
                // 현재 위치를 0으로 만들고 다음 재귀 호출
                board[cx][cy] = 0;
                const [opponentWin, moveCount] = dfs(opponent, [nx, ny], turn + 1);
                board[cx][cy] = 1;
                
                // 상대가 이기면 현재 플레이어는 패배, 상대가 패배하면 현재 플레이어가 승리
                if (!opponentWin) {
                    win = true;
                    minWinMove = Math.min(minWinMove, moveCount + 1);
                } else {
                    maxLoseMove = Math.max(maxLoseMove, moveCount + 1);
                }
            }
        }

        if (win) {
            return [true, minWinMove]; // 현재 플레이어가 이기는 경우
        } else {
            return [false, maxLoseMove]; // 현재 플레이어가 질 수밖에 없는 경우
        }
    };
    
    const [win, moveCount] = dfs(aloc, bloc, 0);
    return moveCount;
}