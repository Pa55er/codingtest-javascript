function solution(n, times) {
    var answer;
    times.sort((a,b)=>a-b);
    let start = 1, end = times[times.length - 1] * n;
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let target = 0;
        for(let i = 0; i < times.length; i++) {
            target += Math.floor(mid / times[i]);
        }
        if(target < n) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
            answer = mid;
        }
    }
    return answer;
}