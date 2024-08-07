function solution(numbers) {
    const results = new Set();
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            results.add(numbers[i] + numbers[j]);
        }
    }
    return Array.from(results).sort((a, b) => a - b);
}