function solution(n) {
    const bk = (a) => {
        if(a == n) {
            answer++;
        }
        for(let i = 0; i < n; i++) {
            if(visited[i] == -1) {
                let flag = 0;
                for(let j = 1; j <= a; j++) {
                    if(i - j >= 0 && visited[i - j] == a - j) {
                        flag = 1;
                        break;
                    }
                    if(i + j < n && visited[i + j] == a - j) {
                        flag = 1;
                        break;
                    }
                }
                if(flag == 0) {
                    visited[i] = a;
                    bk(a + 1);
                    visited[i] = -1;
                }
            }
        }
    };
    
    var answer = 0;
    const visited = new Array(n).fill(-1);
    for(let i = 0; i < n; i++) {
        visited[i] = 0;
        bk(1);
        visited[i] = -1;
    }
    return answer;
}