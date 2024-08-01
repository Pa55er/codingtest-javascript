function solution(skill, skill_trees) {
    var answer = 0;
    for(let i = 0; i < skill_trees.length; i++) {
        let target = "";
        for(let j = 0; j < skill_trees[i].length; j++) {
            if(skill.indexOf(skill_trees[i][j]) != -1) target += skill_trees[i][j];
        }
        if(target === "" || skill.indexOf(target) === 0) answer++;
    }
    return answer;
}