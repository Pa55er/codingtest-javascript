function solution(keyinput, board) {
    const answer = [0, 0];
    keyinput.forEach((a) => {
        if(a === "left" && answer[0] > -(Math.floor(board[0] / 2))) answer[0]--;
        else if(a === "right" && answer[0] < Math.floor(board[0] / 2)) answer[0]++;
        else if(a === "up" && answer[1] < Math.floor(board[1] / 2)) answer[1]++;
        else if(a === "down" && answer[1] > -(Math.floor(board[1] / 2))) answer[1]--;
    })
    return answer;
}