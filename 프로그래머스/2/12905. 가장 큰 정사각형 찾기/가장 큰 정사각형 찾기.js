function solution(board) {
    var answer = board[0][0];
    for(let i = 1; i < board.length; i++) {
        for(let j = 1; j < board[0].length; j++) {
            if(board[i][j] === 1) {
                board[i][j] += Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]);
            }
            if(answer < board[i][j]) answer = board[i][j];
        }
    }
    return answer * answer;
}