function solution(money) {
    const len = money.length;
    const dp = Array.from({ length: 2 }, () => new Array(len).fill(0));
    dp[0][0] = money[0];
    dp[0][1] = Math.max(dp[0][0], money[1]);
    dp[1][1] = money[1];
    for(let i = 2; i < len; i++) {
        dp[1][i] = Math.max(dp[1][i - 2] + money[i], dp[1][i - 1]);
        if(i === len - 1) break;
        dp[0][i] = Math.max(dp[0][i - 2] + money[i], dp[0][i - 1]);
    }
    return Math.max(dp[0][len - 2], dp[1][len - 1]);
}