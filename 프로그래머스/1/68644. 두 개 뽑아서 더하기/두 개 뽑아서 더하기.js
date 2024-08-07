function solution(numbers) {
    const results = new Set();
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i == j) continue;
            results.add(numbers[i] + numbers[j]);
        }
    }
    return Array.from(results).sort((a, b) => a - b);
}