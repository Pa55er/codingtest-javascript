function solution(strs, t) {
    const len = t.length;
    const dp = new Array(len).fill(Infinity);

    for(let i = 0; i < len; i++) {
        const targetStr = t.substr(0, i + 1);
        for(const word of strs) {
            const leftLen = i + 1 - word.length;
            if(targetStr.slice(leftLen) === word) {
                if(leftLen) {
                    dp[i] = Math.min(dp[leftLen - 1] + 1, dp[i]);
                } else {
                    dp[i] = 1;
                }
            }
        }
    }
    
    return dp[len - 1] === Infinity ? -1 : dp[len - 1];
}