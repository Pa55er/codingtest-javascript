function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((a, i) => {return Math.ceil((100 - a) / speeds[i])});
    let count;
    for(let i = 0; i < days.length; i++) {
        if(i == days.length - 1) {
            if(days[i] > 0) {
                answer.push(count);
                answer.push(1);
            }
            else {
                answer.push(count + 1);
            }
        }
        else if(i == 0 || days[i] > 0) {
            for(let j = i + 1; j < days.length; j++) {
                days[j] -= days[i];
            }
            if(i != 0) answer.push(count);
            count = 1;
        }
        else count++;
    }
    return answer;
}