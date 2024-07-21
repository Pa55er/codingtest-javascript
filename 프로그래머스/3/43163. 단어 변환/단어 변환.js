function solution(begin, target, words) {
    var answer = 0;
    let visited = new Array(words.length).fill(false);
    let q = [];
    let count = 0;
    q.push(begin);
    while(q.length) {
        count++;
        let len = q.length;
        while(len--) {
            let nex = q.shift();
            for(let i = 0; i < words.length; i++) {
                if(visited[i] == false) {
                    let a = 0;
                    for(let j = 0; j < nex.length; j++) {
                        if(nex[j] != words[i][j]) a++;
                    }
                    if(a == 1) {
                        if(words[i] == target) {
                            answer = count;
                            break;
                        }
                        else {
                            visited[i] = true;
                            q.push(words[i]);
                        }
                    }
                } 
            }
            if(answer) break;
        }
        if(answer) break;
    }
    return answer;
}
