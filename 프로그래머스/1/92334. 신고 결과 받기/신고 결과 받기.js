function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const count = new Map();
    report = Array.from(new Set(report)).map(ele => ele.split(' '));
    for(const [a, b] of report) {
        count.set(b, (count.get(b) || 0) + 1);
    }
    for(const [a, b] of report) {
        if(count.get(b) >= k) {
            answer[id_list.indexOf(a)]++;
        }
    }
    return answer;
}