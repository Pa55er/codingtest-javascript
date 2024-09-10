function solution(cards1, cards2, goal) {
    let answer = true, goalIndex = 0, cards1Index = 0, cards2Index = 0;
    while(goalIndex < goal.length) {
        if(cards1Index < cards1.length && goal[goalIndex] === cards1[cards1Index]) {
            cards1Index++;
            goalIndex++;
        } else if(cards2Index < cards2.length && goal[goalIndex] === cards2[cards2Index]) {
            cards2Index++;
            goalIndex++;
        } else {
            answer = false;
            break;
        }
    }
    return answer ? "Yes" : "No";
}