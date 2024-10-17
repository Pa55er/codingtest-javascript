function solution(land) {
    var answer;
    for(let i = 1; i < land.length; i++) {
        for(let j = 0; j < 4; j++) {
            let target = 0;
            for(let k = 0; k < 4; k++) {
                if(j !== k && target < land[i - 1][k]) {
                    target = land[i - 1][k];
                }
            }
            land[i][j] += target;
        }
    }
    answer = Math.max(...land[land.length - 1]);
    return answer;
}