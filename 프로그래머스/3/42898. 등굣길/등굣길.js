function solution(m, n, puddles) {
    var answer = 0;
    let dp = Array.from(new Array(n), () => new Array(m).fill(-1));
    dp[0][0] = 1;
    for(let i = 0; i < puddles.length; i++) {
        dp[puddles[i][1] - 1][puddles[i][0] - 1] = 0;
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(dp[i][j] == -1) {
                if(i == 0) dp[i][j] = dp[i][j - 1];
                else if(j == 0) dp[i][j] = dp[i - 1][j];
                else dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000007;
            }
        }
    }
    answer = dp[n - 1][m - 1];
    return answer;
}