function solution(k, n, reqs) {
    const dfs = (index, count, arr) => {
        if(count === 0) {
            combination.push(arr);
            return;
        }
        for(let i = index; i < k; i++) {
            const target = [...arr];
            target[i]++;
            dfs(i, count - 1, target);
        }
    }

    let answer = Infinity;
    const combination = [];
    dfs(0, n - k, new Array(k).fill(1));

    for(const combi of combination) {
        let result = 0;
        const timeLine = [];
        for(let i = 0; i < k; i++) {
            for(let j = 0; j < combi[i]; j++) {
                timeLine.push([i + 1, -1]);
            }
        }
        for(let i = 0; i < reqs.length; i++) {
            let target = Infinity;
            let index;
            for(let j = 0; j < n; j++) {
                if(timeLine[j][0] === reqs[i][2] && target > timeLine[j][1]) {
                    target = timeLine[j][1];
                    index = j;
                }
            }
            if(target <= reqs[i][0]) {
                timeLine[index][1] = reqs[i][0] + reqs[i][1];
            } else {
                result += target - reqs[i][0];
                timeLine[index][1] = target + reqs[i][1];
            }
        }
        if(answer > result) answer = result;
    }

    return answer;
}
