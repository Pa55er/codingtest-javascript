function solution(answers) {
    const people = [[1, 2, 3, 4, 5],
                    [2, 1, 2, 3, 2, 4, 2, 5],
                    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const scores = [0, 0, 0];
    const answer = [];
    for(let i = 0; i < answers.length; i++) {
        for(let j = 0; j < 3; j++) {
            if(answers[i] === people[j][i % people[j].length])
                scores[j]++;
        }
    }
    const target = Math.max(...scores);
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] == target) answer.push(i + 1);
    }
    return answer;
}