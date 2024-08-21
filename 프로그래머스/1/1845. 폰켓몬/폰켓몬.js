function solution(nums) {
    const set = new Set();
    for(let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    
    const answer = (set.size > nums.length / 2) ? nums.length / 2 : set.size;
    return answer;
}

debugger;
solution([3, 1, 2, 3]);