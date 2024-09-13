function solution(orders, course) {
    const courseCount = new Map();
    const maxCount = new Array(11).fill(0);
    let target;
    
    const dfs = (index, len, str) => {
        if(len === 0) {
            if(courseCount.has(str)) {
                courseCount.set(str, courseCount.get(str) + 1);
                maxCount[str.length] = Math.max(maxCount[str.length], courseCount.get(str));
            } else {
                courseCount.set(str, 1);
            }
        }
        for(let i = index; i < target.length; i++) {
            dfs(i + 1, len - 1, str + target[i]);
        }
    }
    
    for(const len of course) {
        for(target of orders) {
            target = target.split("").sort();
            dfs(0, len, "");
        }
    }
    return Array.from(courseCount.keys())
        .filter(course => courseCount.get(course) === maxCount[course.length])
        .sort();
}