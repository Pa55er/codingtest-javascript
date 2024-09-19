function solution(maps) {
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    const visited = Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(0));
    const s = [], l = [], e = [];
    
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[i].length; j++) {
            if(maps[i][j] === "S") {
                s[0] = i;
                s[1] = j;
            } else if(maps[i][j] === "L") {
                l[0] = i;
                l[1] = j;
            } else if(maps[i][j] === "E") {
                e[0] = i;
                e[1] = j;
            }
        }
    }
    
    const bfs = (sx, sy, ex, ey, visit) => {
        visited[sx][sy] = visit;
        const q = [[sx, sy]];
        const answer = -1;
        let count = 0;
        while(q.length) {
            let len = q.length;
            count++;
            while(len--) {
                const target = q.shift();
                for(let i = 0; i < 4; i++) {
                    const nx = target[0] + dx[i];
                    const ny = target[1] + dy[i];
                    if(nx >= 0 && nx < maps.length && ny >= 0 && ny < maps[0].length && maps[nx][ny] !== 'X' && visited[nx][ny] !== visit) {
                        if(nx === ex && ny === ey) {
                            return count;
                        }
                        visited[nx][ny] = visit;
                        q.push([nx, ny]);
                    }
                }
            }
        }
        return answer;
    }
    
    const a = bfs(s[0], s[1], l[0], l[1], 1);
    if(a === -1) return -1;
    const b = bfs(l[0], l[1], e[0], e[1], 2);
    if(b === -1) return -1;
    return a + b;
}