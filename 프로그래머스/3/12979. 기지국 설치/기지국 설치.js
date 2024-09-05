function solution(n, stations, w) {
    let answer = 0;
    let start = 0;
    for (let i = 0; i < stations.length; i++) {
        if (start >= n) break;
        if (start >= stations[i] - w - 1) {
            start = stations[i] + w;
            continue;
        }
        answer +=
            Math.floor((stations[i] - w - 1 - start) / (w * 2 + 1)) +
            ((stations[i] - w - 1 - start) % (w * 2 + 1) > 0 ? 1 : 0);
        start = stations[i] + w;
    }
    if (start < n) {
        answer += Math.ceil((n - start) / (w * 2 + 1));
    }

    return answer;
}