function solution(n, stations, w) {
    let answer = 0;
    let start = 1;
    for (let i = 0; i < stations.length; i++) {
        if (start > n) break;
        if (start > stations[i] - w - 1) {
            start = stations[i] + w + 1;
            continue;
        }
        answer += Math.ceil((stations[i] - w - start) / (w * 2 + 1));
        start = stations[i] + w + 1;
    }
    if (start <= n) {
        answer += Math.ceil((n - start + 1) / (w * 2 + 1));
    }

    return answer;
}