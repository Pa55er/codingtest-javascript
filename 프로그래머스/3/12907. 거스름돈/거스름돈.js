function solution(n, money) {
    const arr = new Array(n + 1).fill(0);
    arr[0] = 1;
    for(const a of money) {
        for(let i = a; i <= n; i++){
            arr[i] = (arr[i] + arr[i - a]) % 1000000007;
        }
    }
    return arr[n];
}