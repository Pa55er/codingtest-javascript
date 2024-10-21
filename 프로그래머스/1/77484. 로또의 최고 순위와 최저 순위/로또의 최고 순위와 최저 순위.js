function solution(lottos, win_nums) {
    const answer = [0, 0];
    lottos.forEach((lotto) => {
        if(lotto === 0) {
            answer[0]++;
        } else if(win_nums.includes(lotto)) {
            answer[0]++;
            answer[1]++;
        }
    });
    for(let i = 0; i < 2; i++) {
        answer[i] = answer[i] > 1 ? 6 - answer[i] + 1 : 6;
    }
    return answer;
}