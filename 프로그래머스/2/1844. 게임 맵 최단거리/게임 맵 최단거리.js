function solution(maps) {   
    var answer = -1;
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    const visited = Array.from(new Array(maps.length), () => new Array(maps[0].length).fill(false));
    const q = [];
    let count = 1;
    q.push([0,0]);
    visited[0][0] = true;
    while(q.length) {
        let len = q.length;
        for(let i = 0; i < len; i++) {
            let target = q[0];
            if(target[0] == maps.length - 1 && target[1] == maps[0].length - 1) {
                answer = count;
                break;
            }
            q.shift();
            for(let i = 0; i < 4; i++) {
                let a = target[0] + dx[i];
                let b = target[1] + dy[i];
                if(a >= 0 && a < maps.length && b >= 0 && b < maps[0].length) {
                    if(visited[a][b] == false && maps[a][b] == 1) {
                        visited[a][b] = true;
                        q.push([a,b]);
                    }
                }
            }
        }
        if(answer != -1) break;
        count++;
    }
    return answer;
}