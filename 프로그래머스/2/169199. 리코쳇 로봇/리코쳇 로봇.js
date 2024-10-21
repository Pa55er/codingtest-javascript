function solution(board) {
    const bfs = () => {
        while(q.length) {
            const [x, y, count] = q.shift();
            if(board[x][y] === "G") {
                answer = count;
                break;
            }
            for(let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                while (nx >= 0 && nx < lx && ny >= 0 && ny < ly && board[nx][ny] !== "D") {
                    nx += dx[i];
                    ny += dy[i];
                }
                nx -= dx[i];
                ny -= dy[i];
                if(!visited[nx][ny]) {
                    q.push([nx, ny, count + 1]);
                    visited[nx][ny] = true;
                }
            }
        }
    }

    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    board = board.map(item => item.split(""));
    let answer = -1;
    const lx = board.length;
    const ly = board[0].length;
    const visited = Array.from({length: lx}, () => new Array(ly).fill(false));

    let sx = -1, sy = -1;
    for(let i = 0; i < lx; i++) {
        for(let j = 0; j < ly; j++) {
            if(board[i][j] === "R") {
                sx = i;
                sy = j;
                break;
            }
        }
        if(sx !== -1) break;
    }

    const q = [[sx, sy, 0]];
    visited[sx][sy] = true;

    bfs();

    return answer;
}
