function solution(places) {
    const dfs = (k, a, b) => {
        if(places[k][a][b] == 'P') {
            for(let i = 0; i < 4; i++) {
                let tx = a + dx[i];
                let ty = b + dy[i];
                if(tx >= 0 && tx < 5 && ty >= 0 && ty < 5) {
                    if(places[k][tx][ty] == 'O') {
                        visited[tx][ty] = true;
                        dfs(k, tx, ty);
                        visited[tx][ty] = false;
                    }
                    else if(places[k][tx][ty] == 'P') {
                        target = 0;
                        break;
                    }
                }
            }
        }
        else if(places[k][a][b] == 'O') {
            for(let i = 0; i < 4; i++) {
                let tx = a + dx[i];
                let ty = b + dy[i];
                if(tx >= 0 && tx < 5 && ty >= 0 && ty < 5 && visited[tx][ty] == false) {
                    if(places[k][tx][ty] == 'P') {
                        target = 0;
                        break;
                    }
                }
            }
        }
    };
    
    var answer = [];
    let target;
    let visited = Array.from(new Array(5), () => new Array(5).fill(false));
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    for(let k = 0; k < places.length; k++) {
        target = 1;
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if(places[k][i][j] == 'P') {
                    visited[i][j] = true;
                    dfs(k, i, j);
                    visited[i][j] = false;
                }
                if(target == 0) break;
            }
            if(target == 0) break;
        }
        answer.push(target);
    }
    return answer;
}