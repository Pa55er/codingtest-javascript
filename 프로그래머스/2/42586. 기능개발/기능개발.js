function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((a, i) => {return Math.ceil((100 - a) / speeds[i])});
    let count = 1;
    let target = days[0];
    for(let i = 1; i < days.length; i++) {
        if(target >= days[i]) count++;
        else {
            answer.push(count);
            count = 1;
            target = days[i];
        }
        if(i === days.length - 1) answer.push(count);
    }
    return answer;
}